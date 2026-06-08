import { Request, Response } from "express";
import commentQueries from "@/posts/commentQueries";
import { validationResult } from "express-validator";
import { AppError } from "@/Errors";
const commentController = {
  get: async (req: Request, res: Response) => {
    const comments = await commentQueries.get(Number(req.params.postid));
    res.json(comments);
  },

  post: async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (!req.user) {
      throw new AppError("no user defined", 404);
    }
    const comment = await commentQueries.post(
      Number(req.params.postid),
      req.body.content,
      Number(req.user.id),
    );
    res.json(comment);
  },
  delete: async (req: Request, res: Response) => {
    await commentQueries.delete(Number(req.params.commentid));
    res.json({ delete: "success" });
  },
};

export default commentController;
