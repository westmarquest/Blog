const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/login", authRoutes);
router.use("/dash", dashboardRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;
