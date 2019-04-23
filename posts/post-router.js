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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const certainPost = await db.findById(id);

    if (certainPost.length === 0) {
      res.status(404).json("The post with the specified ID does not exist.");
    } else {
      res.status(200).json(certainPost);
    }
  } catch (err) {
    res.status(500).json("The post information could not be retrieved.");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletePost = await db.remove(id);
    if (deletePost <= 0) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    } else {
      res.status(200).json(deletePost);
    }
  } catch (err) {
    res.status(500).json({
      errorMessage: "Please provide title and contents for the post."
    });
  }
});

module.exports = router;
