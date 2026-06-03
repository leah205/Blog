import express from "express";
const router = express.Router();
import homeController from "@/controllers/homeController.js";
import postController from "@/controllers/postController.js";
import commentController from "@/controllers/commentController.js";

router.get("/posts", postController.getPosts);
router.get("/posts/:postid", postController.getPost);
router.get("/", homeController.get);
router.get("/posts/:postid/comments", commentController.get);

export default router;
