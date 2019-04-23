const express = require("express");
const cors = require("cors");
// importing to be able to use posts in seperate file
const postRouter = require("./posts/post-router");

const server = express();

server.use(express.json());

server.use(cors());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API-II</h>
  `);
});

//use the /posts folder
server.use("/api/posts", postRouter);

module.exports = server;
