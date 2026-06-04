import userQueries from "@/auth/userQueries";
import { NextFunction, Request, Response } from "express";
import passport from "@/auth/passport_config";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import config from "@/config/config";

interface authInfo {
  message?: string;
}

const userController = {
  signup: {
    post: async (req: Request, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const is_author = req.body.username == "leah" ? true : false;
      const user = await userQueries.createUser(
        req.body.username,
        req.body.password,
        is_author,
      );
      res.json(user);
    },
  },
  login: {
    post: async (req: Request, res: Response, next: NextFunction) => {
      passport.authenticate(
        "local",
        { session: false },
        (err: Error, user: Express.User, info: authInfo) => {
          console.error(err);
          if (err || !user) {
            return res.status(400).json({
              message: info.message,
              user: user,
            });
          }
          req.login(user, { session: false }, (err) => {
            if (err) {
              res.json(err);
            }
          });

          const token = jwt.sign(
            {
              id: user.id,
              username: user.username,
              is_author: user.is_author,
            },
            config.secret,
          );
          return res.json({ user, token });
        },
      )(req, res, next);
    },
  },
};

export default userController;
