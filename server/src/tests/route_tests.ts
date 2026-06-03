import request from "supertest";
import express from "express";
import index_router from "@/index_router.js";
import test from "node:test";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/", index_router);

test("public route works", (done) => {
  request("app")
    .get("/")
    .expect("Content-Type", "/json/")
    .expect({ route: "home" })
    .expect(200, done);
});
