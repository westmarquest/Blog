const express = require("express");
const router = express.Router();

// Import the Comment model
const { Comment } = require("../models/Comment");
const { User } = require("../models/User");
const { Post } = require("../models/Post");

const commentController = {
  // Route to get all comments???
  allComments: async (req, res) => {
    try {
      const comment = await Comment.find();
      res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Route to create a new comment
  newComment: async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
      const post = await Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $push: { comments: comment._id } },
        { new: true }
      );

      if (!post) {
        return res
          .status(404)
          .json({ message: "comment created, but no posts with this ID" });
      }

      res.json({ message: "comment created" });
    } catch (err) {
      console.error(err);
    }
  },

  // Route to get a single comment by ID
  oneComment: async (req, res) => {
    try {
      const comment = await Comment.findOne({ _id: req.params.commentId });

      if (!comment) {
        return res
          .status(404)
          .json({ message: "No comment found with that id" });
      }

      res.json(comment);
    } catch (err) {
      res.status(500).json(err);
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
  deleteComment: async (req, res) => {
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
  },
};
module.exports = commentController;
