const express = require("express");
const router = require("express").Router();

const {
  allComments,
  newComment,
  oneComment,
  updateComment,
  deleteComment,
} = require("../../controllers/commentController");

// Route to create a new comment
// router.get("/", allComments);
// router.post("/new", newComment);
// router.get("/:id", oneComment);
// router.put("/:id", updateComment);
// router.delete("/:id", deleteComment);

// module.exports = router;

router.route("/").get(allComments).post(newComment, updateComment);

// /api/comments/:commentId
router.route("/:commentId").get(oneComment, deleteComment);

module.exports = router;
