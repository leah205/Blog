import { Request, Response, NextFunction } from "express";
import commentQueries from "@/posts/commentQueries";
const commentController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const comments = await commentQueries.get(Number(req.params.postid));
      res.json(comments);
    } catch (err) {
      next(err);
    }
  },
};

export default commentController;
