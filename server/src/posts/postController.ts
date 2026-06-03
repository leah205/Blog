import { Request, Response, NextFunction } from "express";
import postDB from "@/posts/postDb";
//import commentQueries from "@/posts/commentQueries.js";

const postController = {
  getPost: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await postDB.getPost(Number(req.params.postid));
      res.json(post);
    } catch (err) {
      next(err);
    }
  },
  getPosts: async (req: Request, res: Response, next: NextFunction) => {
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
  },
};

export default postController;
