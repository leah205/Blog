import express from "express";
const router = express.Router();
import homeController from "../controllers/homeController.js";
import postController from "../controllers/postController.js";
import { appendFile } from "node:fs";

router.get("/posts", postController.get);
router.get("/", homeController.get);
//router.get("/comments", commentController.get);

export default router;
