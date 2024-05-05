// const Sequelize = require("sequelize");
// require("dotenv").config();
// console.log("userDb:", userDb);
// console.log("postDb:", postDb);

// // Initialize Sequelize instance for user authentication database
// const userDb = new Sequelize(
//   process.env.USER_DB_NAME,
//   process.env.USER_DB_USER,
//   process.env.USER_DB_PASSWORD,
//   {
//     host: process.env.USER_DB_HOST || "localhost",
//     dialect: "mysql",
//     port: process.env.USER_DB_PORT || 3306,
//   }
// );

// // Initialize Sequelize instance for posts database
// const postDb = new Sequelize(
//   process.env.POST_DB_NAME,
//   process.env.POST_DB_USER,
//   process.env.POST_DB_PASSWORD,
//   {
//     host: process.env.POST_DB_HOST || "localhost",
//     dialect: "mysql",
//     port: process.env.POST_DB_PORT || 3306,
//   }
// );

// module.exports = {
//   sequelize: { userDb, postDb },
// };

const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
