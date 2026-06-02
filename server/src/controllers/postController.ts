import { Request, Response, NextFunction } from "express";
import postDB from "../db/postDb.js";
const postController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await postDB.getPosts();
      res.json(posts);
    } catch (err) {
      next(err);
    }
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        next(new Error("no user defined"));
        return;
      }
      await postDB.createPost(
        req.body.title,
        req.body.content,
        req.user.id,
        req.body.published,
      );
    } catch (err) {
      next(err);
    }
    res.json({ route: "home" });
  },
};

export default postController;
