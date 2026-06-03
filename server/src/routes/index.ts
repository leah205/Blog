import express from "express";
const router = express.Router();
import homeController from "@/controllers/homeController.js";

import authRouter from "@/routes/auth_router.js";
import postRouter from "@/routes/post_router.js";
//import commentRouter from "@/routes/comment_router.js";
import publicRouter from "@/routes/public_router.js";
router.use(authRouter);
//router.use("/posts", isAuthenticate, postsRouter)
router.get("/", homeController.get);
router.use("/", authRouter);
router.use("/posts", postRouter);
//router.use("/comments", commentRouter);
router.use("/public", publicRouter);

export default router;
