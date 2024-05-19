// controllers/index.js

const homeController = require("./homeController");
const authController = require("./authController");
const commentController = require("./commentController");
const dashboardController = require("./dashboardController");
const postController = require("./postController");
const userController = require("./userController");

module.exports = {
  homeController,
  authController,
  commentController,
  dashboardController,
  postController,
  userController,
};
