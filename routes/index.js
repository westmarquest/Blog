const express = require("express");
const router = express.Router();

// const homeRoutes = require("./homeRoutes");
const authRoutes = require("./authRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const homeRoutes = require("./homeRoutes");

// router.use("/", homeRoutes);
router.use("/login", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/comment", commentRoutes);
router.use("/post", postRoutes);
router.use("/", homeRoutes);
// router.get("/", async (req, res) => {
// //   res.render("homepage", { loginPartial: "login" }); // Render main.hbs with login.hbs partial
// // });

module.exports = router;
