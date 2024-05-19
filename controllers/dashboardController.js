const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const dashboardController = {
  renderDashboard: async (req, res) => {
    try {
      // Fetch data needed for the dashboard, such as user's posts, comments, etc.
      const userId = req.session.user_id; // Assuming user ID is stored in the session
      const user = await User.findByPk(userId);
      const userPosts = await Post.findAll({ where: { userId } });
      const userComments = await Comment.findAll({ where: { userId } });

      // Render the dashboard template and pass the fetched data to it
      res.render("dashboard", { user, userPosts, userComments });
    } catch (error) {
      console.error("Error rendering dashboard:", error);
      // Handle errors appropriately
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = dashboardController;
