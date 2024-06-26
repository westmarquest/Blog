const { userDb, postDb, commentDb } = require("../db/db");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const dashboardController = {
  renderDashboard: async (req, res) => {
    try {
      // Fetch data needed for the dashboard
      const userId = req.session.user_id;
      const user = await User.findOne({
        where: { id: userId },
        using: userDb,
      });
      const userPosts = await Post.findAll({
        where: { id: userId },
        using: postDb,
      });
      const userComments = await Comment.findAll({
        where: { id: userId },
        using: commentDb,
      });

      // Render the dashboard template and pass the fetched data to it
      res.render("dashboard", { user, userPosts, userComments });
    } catch (error) {
      console.error("Error rendering dashboard:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  // Function to fetch all user posts
  fetchUserPosts: async (req, res) => {
    try {
      const userId = req.session.user_id;
      const userPosts = await Post.findAll({ where: { id: userId } });
      res.status(200).json({ userPosts });
    } catch (error) {
      console.error("Error fetching user posts:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Function to fetch all user comments
  fetchUserComments: async (req, res) => {
    try {
      const userId = req.session.user_id;
      const userComments = await Comment.findAll({ where: { id: userId } });
      res.status(200).json({ userComments });
    } catch (error) {
      console.error("Error fetching user comments:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Function to populate user posts
  populateUserPosts: async (req, res) => {
    try {
      const userId = req.session.user_id;
      const userPosts = await Post.findAll({
        where: { userId: req.session.user_id },
      });
      res.render("dashboard", { userPosts });
    } catch (error) {
      console.error("Error populating user posts:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  // Function to populate user comments
  populateUserComments: async (req, res) => {
    try {
      const userId = req.session.user_id;
      const userComments = await Comment.findAll({
        where: { userId: req.session.user_id },
      });
      res.render("dashboard", { userComments });
    } catch (error) {
      console.error("Error populating user comments:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = dashboardController;
