const express = require("express");

const db = require("../data/db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, contents } = req.body;
    if (!title || !contents) {
      res.status(400).json("Please provide title and contents for the post.");
    }
    const post = await db.insert(req.body);
    res.status(201).json(post);
  } catch (err) {
    res
      .status(500)
      .json("There was an error while saving the post to the database");
  }
});

router.get("/", async (req, res) => {
  try {
    const getPosts = await db.find();
    res.status(200).json(getPosts);
  } catch (err) {
    res.status(500).json("The posts information could not be retrieved.");
  }
});

module.exports = router;
