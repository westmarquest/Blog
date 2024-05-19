// Import required modules
const express = require("express");
const sequelize = require("./config/config");
const path = require("path");
const ejs = require("ejs");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const session = require("express-session");

// Create an Express application instance
const app = express();
const PORT = process.env.PORT || 3002;

// Set up sessions
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));
// // Import models
// const User = require("./models/User");
// const Post = require("./models/Post");
// const Comment = require("./models/Comment");

// Middleware setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("js"));
app.set("views", path.join(__dirname, "views"));

// Use the routes defined in index.js
const indexRouter = require("./routes/index");
app.use(indexRouter);
const dashboardRoutes = require("./routes/dashboardRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const authRoutes = require("./routes/authRoutes");
const homeRoutes = require("./routes/homeRoutes");

// Mount routes
app.use("/", homeRoutes);
app.use("/", authRoutes);
app.use("/comment", commentRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/post", postRoutes);

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
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

module.exports = app;
