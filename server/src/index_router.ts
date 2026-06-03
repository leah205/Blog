import express from "express";
import { Request, Response } from "express";
const router = express.Router();

import authRouter from "@/auth/auth_router.js";
import postRouter from "@/posts/post_router.js";

import publicRouter from "@/public/public_router.js";
router.use(authRouter);
router.get("/", (req: Request, res: Response) => res.redirect("/posts"));
router.use("/", authRouter);
router.use("/posts", postRouter);
router.use("/public", publicRouter);

export default router;
