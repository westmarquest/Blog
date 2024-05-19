const express = require("express");
const router = express.Router();
const { userDb, postDb, commentDb } = require("../db/db");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// Controller to render the homepage
const renderHome = async (req, res) => {
  try {
    console.log("Rendering homepage");
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.render("homepage", {
      posts: posts.map((post) => post.get({ plain: true })),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = { renderHome };
