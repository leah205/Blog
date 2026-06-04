import { Request, Response, NextFunction } from "express";
import postDB from "@/posts/postDb";
import { AppError } from "@/Errors";
import { validationResult } from "express-validator";

//import commentQueries from "@/posts/commentQueries.js";

const postController = {
  getPost: async (req: Request, res: Response) => {
    const post = await postDB.getPost(Number(req.params.postid));
    res.json(post);
  },
  getPosts: async (req: Request, res: Response) => {
    const posts = await postDB.getPosts();
    res.json(posts);
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (!req.user) {
      return next(new AppError("no user defined", 404));
    }
    const post = await postDB.createPost(
      req.body.title,
      req.body.content,
      req.user.id,
      req.body.published,
    );
    res.json(post);
  },
};

export default postController;
