import request from "supertest";
import express from "express";
import index_router from "../index_router";
import test from "node:test";
const app = express();
app.use(express.urlencoded({ extended: false }));
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
  request("app")
    .get("/")
    .expect("Content-Type", "/json/")
    .expect({ route: "home" })
    .expect(200, done);
});
