import express from "express";
const router = express.Router();
import homeController from "../controllers/homeController.js";
import postController from "../controllers/postController.js";
import commentController from "../controllers/commentController.js";

router.get("/posts", postController.get);
router.get("/", homeController.get);
router.get("/posts/:postid/comments", commentController.get);

export default router;
