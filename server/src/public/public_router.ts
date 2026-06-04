import express from "express";
import homeController from "./homeController";
const public_router = express.Router();
import { asyncHandler } from "@/Errors";

public_router.get("/", asyncHandler(homeController.get));
export default public_router;
