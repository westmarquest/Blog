// Import required modules
const express = require("express");
const sequelize = require("./config/connection");
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
// app.use(express.static(path.join(__dirname, "js")));
// app.use(express.static(path.join(__dirname, "public/css")));
app.set("views", path.join(__dirname, "views"));

// Use the routes defined in index.js
const indexRouter = require("./routes/index");

// Use the main router
app.use("/", indexRouter);

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// app.get("/public/js/dashboard.js", (req, res) => {
//   res.set("Content-Type", "text/javascript");
//   res.sendFile(path.join(__dirname, "public", "js", "dashboard.js"));
// });

// Sync models with the database
async function syncDatabase() {
  try {
    await sequelize.sync(); // Sync all models with the database
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
}

// Serve static files with correct Content-Type
app.use(
  "/public/js",
  express.static(path.join(__dirname, "public/js"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.set("Content-Type", "text/javascript");
      }
    },
  })
);

// Call syncDatabase function before starting the server
syncDatabase();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});

module.exports = app;
