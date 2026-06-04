import express from "express";
const auth_router = express.Router();
import userController from "@/auth/userController";
import validation from "@/middleware/validation";
import { asyncHandler } from "@/Errors";

auth_router.post(
  "/signup",
  validation.signup,
  asyncHandler(userController.signup.post),
);
auth_router.post("/login", asyncHandler(userController.login.post));
auth_router.get("/logout", asyncHandler(userController.logout.get));

export default auth_router;
