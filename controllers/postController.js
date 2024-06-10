const express = require("express");
const router = express.Router();
const { userDb, postDb, commentDb } = require("../db/db");
const { Post } = require("../models/Post");
const { User } = require("../models/User");

const postController = {
  // Route to retrieve all posts
  allPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Route to retrieve a specific post by ID
  onePost: async (req, res) => {
    try {
      const post = await Post.findOne({ _id: req.params.postId });

      if (!post) {
        return res.status(404).json({ message: "No post with that ID" });
      }

      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  newPost: async (req, res) => {
    try {
      const PostData = await Post.create(req.body);
      res.json(PostData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Route to update an existing post
  updatePost: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      await post.update(req.body);
      res.status(200).json(post);
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Route to delete a post
  deletePost: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      await post.destroy();
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = postController;
