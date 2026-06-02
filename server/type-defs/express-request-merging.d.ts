import "express";

declare global {
  namespace Express {
    interface User {
      id: number;
    }
    export interface Request {
      user?: User;
    }
    export interface Response {
      locals: {
        user?: User;
      };
    }
  }
}
