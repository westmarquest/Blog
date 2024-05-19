const express = require("express");
const router = express.Router();
const { Post } = require("../models");

// Controller to render the homepage
const renderHome = async (req, res) => {
  try {
    console.log("Rendering homepage");
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.render("homepage", {
      user: req.session.user,
      posts: posts.map((post) => post.get({ plain: true })),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = { renderHome };
