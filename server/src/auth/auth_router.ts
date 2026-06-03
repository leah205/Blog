import express from "express";
const auth_router = express.Router();
import userController from "@/auth/userController";
import validation from "@/middleware/validation";

auth_router.post("/signup", validation.signup, userController.signup.post);

export default auth_router;
