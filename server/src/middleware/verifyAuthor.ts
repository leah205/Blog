import { RequestHandler } from "express";
import { AppError } from "@/Errors";
const verifyAuthor: RequestHandler = (req, res, next) => {
  if (!req.user) {
    throw new AppError("user is not authorized to access this resource", 403);
  }
  if (req.user.is_author) {
    return next();
  }
  throw new AppError("user is not authorized to access this resource", 403);
};

export default verifyAuthor;
