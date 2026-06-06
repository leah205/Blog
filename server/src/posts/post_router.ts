import express from "express";
import postController from "@/posts/postController";
import commentController from "@/posts/commentController";
const post_router = express.Router();
import { asyncHandler } from "@/Errors";
import verifyToken from "@/middleware/authenticateToken";
import verifyAuthor from "@/middleware/verifyAuthor";
import validation from "@/middleware/validation";

post_router.get("/", asyncHandler(postController.getPosts));
post_router.get("/:postid", asyncHandler(postController.getPost));
post_router.get("/:postid/comments", asyncHandler(commentController.get));
post_router.post(
  "/",
  asyncHandler(verifyToken),
  asyncHandler(verifyAuthor),
  validation.createPost,
  asyncHandler(postController.post),
);
post_router.post(
  "/:postid/comments",
  asyncHandler(verifyToken),
  validation.createComment,
  asyncHandler(commentController.post),
);

post_router.delete(
  "/:postid/comments/:commentid",
  asyncHandler(verifyToken),
  asyncHandler(verifyAuthor),
  validation.createComment,
  asyncHandler(commentController.delete),
);

post_router.put(
  "/:postid",
  asyncHandler(verifyToken),
  asyncHandler(verifyAuthor),
  asyncHandler(postController.update),
);

export default post_router;
