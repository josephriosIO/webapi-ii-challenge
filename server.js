const express = require("express");
// importing to be able to use posts in seperate file
const postRouter = require("./posts/post-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API-II</h>
  `);
});

//use the /posts folder
server.use("/api/posts", postRouter);

module.exports = server;
