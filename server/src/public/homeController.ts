import { Request, Response, NextFunction } from "express";

const homeController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    res.json({ route: "home" });
  },
};

export default homeController;
