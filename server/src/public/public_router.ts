import router from "@/index_router.js";
import express from "express";
import { appendFile } from "node:fs";
import homeController from "./homeController.js";
const public_router = express.Router();

public_router.get("/", homeController.get);
export default public_router;
