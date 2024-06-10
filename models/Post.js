const { Schema, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Comment = require("./Comment");

// Define the Post model using Sequelize
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, // Connect the model to your Sequelize instance
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    modelName: "Post", // Set the model name to "Post"
  }
);

module.exports = Post;
