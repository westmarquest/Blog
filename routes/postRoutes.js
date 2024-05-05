const express = require("express");
const router = express.Router();
const Post  = require("../models");

const { allPosts, onePost, newPost, updatePost, deletePost } = require("../controllers/postController");

router.get("/", allPosts);
router.get("/:id", onePost);
router.post("/new", newPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
