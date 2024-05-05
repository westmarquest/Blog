const express = require("express");
const router = express.Router();

// Import the Comment model
const Comment = require("../models/Comment");
const User = require("../models/User");
const Post = require("../models/Post")


const commentController = {
// Route to get all comments???
allComments: async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    console.error("Error fetching comments:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
},

// Route to create a new comment
newComment:  async (req, res) => {
  try {
    const { text, userId, postId } = req.body;
    const comment = new Comment({ text, userId, postId });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error("Error creating comment:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
},

// Route to get a single comment by ID
oneComment: async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(404).json({ error: "Comment not found" });
      return;
    }
    res.json(comment);
  } catch (err) {
    console.error("Error fetching comment:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
},

// Route to update a comment by ID
updateComment: async (req, res) => {
  try {
    const { text } = req.body;
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { text },
      { new: true }
    );
    if (!comment) {
      res.status(404).json({ error: "Comment not found" });
      return;
    }
    res.json(comment);
  } catch (err) {
    console.error("Error updating comment:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
},

// Route to delete a comment by ID
deleteComment:  async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      res.status(404).json({ error: "Comment not found" });
      return;
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.error("Error deleting comment:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

};
module.exports = commentController;
