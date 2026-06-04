import express from "express";
import postController from "@/posts/postController";
import commentController from "@/posts/commentController";
const post_router = express.Router();
import { asyncHandler } from "@/Errors";
import verifyToken from "@/middleware/authenticateToken";
import verifyAuthor from "@/middleware/verifyAuthor";

post_router.get("/", verifyToken, asyncHandler(postController.getPosts));
post_router.get("/:postid", verifyToken, asyncHandler(postController.getPost));
post_router.get(
  "/:postid/comments",
  asyncHandler(verifyToken),
  asyncHandler(commentController.get),
);
post_router.post(
  "/",
  asyncHandler(verifyToken),
  verifyAuthor,
  asyncHandler(postController.post),
);

export default post_router;
