// const router = require("express").Router();
// const withAuth = require("../utils/auth");
// const authRoutes = require("./authRoutes");
// const { User } = require("../models");

// // Route for rendering the homepage
// // router.get("/", async (req, res) => {
// //   try {
// //     console.error("Attempting to reach dashboard");
// //     if (req.session.logged_in) {
// //       console.error("Checking if logged in");
// //       // User is logged in, redirect to the dashboard
// //       res.redirect("/dashboard");
// //     } else {
// //       console.error("Attempting to reach homepage");
// //       // User is not logged in, redirect to the login page
// //       res.redirect("/login");
// //     }
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// //
// // router.get("/", async (req, res) => {
// //   try {
// //     console.error("Attempting to reach homepage");
// //     // Redirect to the login page regardless of whether the user is logged in or not
// //     res.redirect("/login");
// //     console.log("homepage reached");
// //   } catch (err) {
// //     console.error("Error:", err);
// //     res.status(500).json(err);
// //   }
// // });

// // // Route for rendering the login page (handled by authRoutes)
// // router.use("/login", authRoutes);

// // // Route for rendering the dashboard (protected route, handled by dashboardRoutes)
// // router.use("/dashboard", withAuth, dashboardRoutes);

// // module.exports = router;

// router.get("/", async (req, res) => {
//   try {
//     if (!req.session.logged_in) {
//       res.redirect("/login");
//     } else {
//       res.redirect("/dashboard");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

// module.exports = router;
