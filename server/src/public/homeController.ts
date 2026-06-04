import { Request, Response, NextFunction } from "express";

const homeController = {
  get: async (req: Request, res: Response) => {
    res.json({ route: "home" });
  },
};

export default homeController;
