const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    // Define your model attributes here
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Comment",
    timestamps: true,
  }
);

module.exports = Comment;

// const commentSchema = new Schema({
//   text: String,
//   username: String,
// });

// // Initialize the Comment model
// const Comment = model('comment', commentSchema);

// module.exports = Comment;
