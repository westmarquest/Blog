// const express = require('express');
// const router = express.Router();
// const { Post } = require('../models'); // Assuming you have a Post model

// // Route to render the homepage
// router.get('/', async (req, res) => {
//   try {
//     // Fetch all posts from the database
//     const posts = await Post.findAll();
//     // Render the homepage template and pass the posts data to it
//     res.render('homepage', { posts });
//   } catch (error) {
//     console.error('Error rendering homepage:', error);
//     // Handle errors appropriately
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Add more routes as needed

// module.exports = router;

const router = require("express").Router();

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("homepage");
});

module.exports = router;
