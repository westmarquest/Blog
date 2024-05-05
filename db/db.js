require("dotenv").config();
const Sequelize = require("sequelize");

// Initialize Sequelize instance for user authentication database
const userDb = new Sequelize(
  process.env.USER_DB_NAME,
  process.env.USER_DB_USER,
  process.env.USER_DB_PASSWORD,
  {
    host: process.env.USER_DB_HOST || "localhost",
    dialect: "mysql",
    port: process.env.USER_DB_PORT || 3306,
  }
);

// Initialize Sequelize instance for posts database
const postDb = new Sequelize(
  process.env.POST_DB_NAME,
  process.env.POST_DB_USER,
  process.env.POST_DB_PASSWORD,
  {
    host: process.env.POST_DB_HOST || "localhost",
    dialect: "mysql",
    port: process.env.POST_DB_PORT || 3306,
  }
);

module.exports = {
  userDb,
  postDb,
};
