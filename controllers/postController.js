const express = require("express");
const router = express.Router();
const  Post  = require("../models/Post");
const  User  = require("../models/User");

// Route to create a new post
const postController = {


// Route to retrieve all posts
allPosts: async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Route to retrieve a specific post by ID
onePost: async (req, res) => {
    const postId = req.params.id;
    try {
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.status(200).json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

newPost: async (req, res) => {
  try {
    // Assuming req.body contains the necessary data for creating a new post
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
  }

};


module.exports = postController;
