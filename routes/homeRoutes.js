const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const homeController = require("../controllers/homeController");

router.get("/", homeController.renderHome);

module.exports = router;
