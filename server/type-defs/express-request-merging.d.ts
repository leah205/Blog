import "express";

declare global {
  namespace Express {
    interface User {
      id: number;
      is_author: boolean;
      username: string;
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
