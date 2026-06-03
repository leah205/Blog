import { body } from "express-validator";
import userQueries from "@/db/userQueries.js";

const validation = {
  signup: [
    body("username").trim().notEmpty().withMessage("username is required"),
    body("password").trim().notEmpty().withMessage("password is required"),
  ],
};

export default validation;
