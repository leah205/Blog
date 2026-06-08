import request from "supertest";
import express from "express";
import index_router from "../index_router";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", index_router);
import prisma from "@/db/prisma_client";

beforeEach(async () => {
  await prisma.$transaction([
    prisma.user.deleteMany(),
    prisma.post.deleteMany(),
    prisma.comment.deleteMany(),
  ]);
});

test("public route works", (done) => {
  request(app)
    .get("/public")
    .expect("Content-Type", /json/)
    .expect({ route: "home" })
    .expect(200, done);
});

test("post signup route works", (done) => {
  request(app)
    .post("/signup")
    .set("Content-Type", "application/json")
    .send({ username: "dave", password: "123" })
    .expect(function (res) {
      res.body.username = "dave";
    })
    .expect(200, done);
});

test("post login route", (done) => {
  request(app)
    .post("/signup")
    .set("Content-Type", "application/json")
    .send({ username: "dave", password: "123" })
    .then(() => {
      request(app)
        .post("/login")
        .set("Content-Type", "application/json")
        .send({ username: "dave", password: "123" })
        .expect(function (res) {
          res.body.username = "dave";
          if (!("password" in res.body)) {
            throw new Error("no password");
          }
          if (!("token" in res.body)) {
            throw new Error("no token");
          }
        })
        .expect(200, done);
    });
});
