const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const { getAll } = require("../controllers/dashboardController");
const dashboardController = require("../controllers/dashboardController");

// Dashboard route - protected route
router.get("/api/dashboard", dashboardController.renderDashboard);

module.exports = router;
