const express = require("express");

const PostRouter = require("../posts/post-router.js");

const server = express();

server.use(express.json());

server.use("/api/posts", PostRouter);

//sanity check endpoint to make sure our server can run & can answer requests
server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running" });
});

module.exports = server;
