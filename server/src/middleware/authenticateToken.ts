import passport from "@/auth/passport_config";
import { Request, Response, NextFunction } from "express";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    passport.authenticate("jwt", { session: false });
    next();
  } catch (err) {
    next(err);
  }
};

export default verifyToken;
