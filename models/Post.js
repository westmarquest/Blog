const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

// Define the Post model using Sequelize
class Post extends Model {}

Post.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Connect the model to your Sequelize instance
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    modelName: "Post", // Set the model name to "Post"
  }
);

module.exports = Post;
