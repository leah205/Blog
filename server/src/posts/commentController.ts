import { Request, Response } from "express";
import commentQueries from "@/posts/commentQueries";
const commentController = {
  get: async (req: Request, res: Response) => {
    const comments = await commentQueries.get(Number(req.params.postid));
    res.json(comments);
  },
};

export default commentController;
