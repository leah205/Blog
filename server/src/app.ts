import express from "express";
const app = express();
import cors from "cors";
import passport from "@/passport.js";
import config from "@/config/config.js";
import indexRouter from "@/routes/index.js";
import { Request, Response, NextFunction } from "express";

import session from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import prisma from "@/db/prisma_client.js";
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: config.secret,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }) as unknown as session.Store,
  }),
);

app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    res.locals.user = req.user;
  }

  next();
});

app.use("/", indexRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send(err);
  next();
});

app.listen(config.port, () => {
  console.log(`server started on part ${config.port}`);
});
