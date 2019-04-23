const express = require("express");
const postRouter = require("./posts/post-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API-II</h>
  `);
});

server.use("/api/posts", postRouter);

module.exports = server;
