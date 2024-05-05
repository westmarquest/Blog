// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// class Comment extends Model {}

// Comment.init(
//   {
//     // Define the model attributes (fields)
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     // You can define more attributes as needed
//   },
//   {
//     sequelize, // Pass the Sequelize instance
//     modelName: 'Comment', // Set the model name
//   }
// );

// module.exports = Comment;

const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/config");
const { Schema, model } = require("mongoose");
const { User } = require("./User");

console.log(User);

// Schema for what makes up a comment
const commentSchema = new Schema({
  text: String,
  username: String,
});

// Initialize the Comment model
const Comment = model("comment", commentSchema);

// // Define the association between User and Comment
// User.hasMany(Comment); // A user can have many comments
// Comment.belongsTo(User); // A comment belongs to a user

module.exports = Comment;
