import express from "express";
import postController from "@/controllers/postController.js";
import commentController from "@/controllers/commentController.js";
const post_router = express.Router();

post_router.get("/", postController.getPosts);
post_router.get("/:postid", postController.getPost);
post_router.get("/:postid/comments", commentController.get);

export default post_router;
