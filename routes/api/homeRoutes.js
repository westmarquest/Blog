const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const homeController = require("../../controllers/homeController");
const postController = require("../../controllers/postController");

router.get("/home", homeController.renderHome);

router.post("/api/posts", postController.newPost);

module.exports = router;
