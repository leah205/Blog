import express, { Request, Response } from "express";
const router = express.Router();
import verifyToken from "./middleware/authenticateToken";

import authRouter from "@/auth/auth_router";
import postRouter from "@/posts/post_router";
import publicRouter from "@/public/public_router";

router.use("/public", publicRouter);
router.use("/", authRouter);

// router.get("/", verifyToken, (req: Request, res: Response) =>
//   res.json("authorized"),
// );
router.use("/posts", postRouter);

export default router;
