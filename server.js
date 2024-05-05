// Import required modules
const express = require("express");
const sequelize = require("./config/config");
const path = require("path");
const ejs = require("ejs");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

// Create an Express application instance
const app = express();

// // Import models
// const User = require("./models/User");
// const Post = require("./models/Post");
// const Comment = require("./models/Comment");

// Middleware setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Use the routes defined in index.js
const indexRouter = require("./routes/index");
app.use(indexRouter);
const dashboardRoutes = require("./routes/dashboardRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const authRoutes = require("./routes/authRoutes");

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/posts", postRoutes);




app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static files
app.use(express.static(path.join(__dirname, "public")));

// Sync models with the database
async function syncDatabase() {
  try {
    await sequelize.sync(); // Sync all models with the database
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
}

// Call syncDatabase function before starting the server
syncDatabase();

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
