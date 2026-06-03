import userQueries from "@/auth/userQueries";
import { NextFunction, Request, Response } from "express";

import { validationResult } from "express-validator";

const userController = {
  signup: {
    post: async (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        console.log("hello world");
        await userQueries.createUser(req.body.username, req.body.password);
        res.json({ success: "" });
      } catch (err) {
        next(err);
      }
    },
  },
};

export default userController;
