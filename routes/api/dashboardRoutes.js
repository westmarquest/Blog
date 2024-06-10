const router = require("express").Router();
const dashboardController = require("../../controllers/dashboardController");

// Dashboard route - protected route
router.get("/dashboard", dashboardController.renderDashboard);
router.get("/user/posts", dashboardController.fetchUserPosts);
router.get("/user/comments", dashboardController.fetchUserComments);

module.exports = router;
