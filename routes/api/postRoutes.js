const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");

const {
  allPosts,
  onePost,
  newPost,
  updatePost,
  deletePost,
} = require("../../controllers/postController");

router.get("/api/posts", allPosts);
router.get("/:id", onePost);
router.post("/new", newPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
