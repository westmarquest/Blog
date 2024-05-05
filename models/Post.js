// // const { Model, DataTypes } = require("sequelize");
// // const { sequelize } = require("../config/config");

// // class Post extends Model {}

// // Post.init(
// //   {
// //     title: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //     content: {
// //       type: DataTypes.TEXT,
// //       allowNull: false,
// //     },
// //     authorId: {
// //       type: DataTypes.INTEGER,
// //       allowNull: false,
// //       references: {
// //         model: "users", // Name of the referenced model
// //         key: "id", // Primary key of the referenced model
// //       },
// //     },
// //     // createdAt: {
// //     //   type: DataTypes.DATE,
// //     //   allowNull: false,
// //     //   defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
// //     // },
// //   },
// //   {
// //     sequelize,
// //     modelName: "Post",
// //     tableName: "posts", // Assuming your table is named "posts"
// //   }
// // );

// // module.exports = Post;
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/config');

// class Post extends Model {}

// Post.init(
//   {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'User',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     modelName: 'post',
//   }
// );

// module.exports = Post;

const { Schema, model } = require("mongoose");

// Schema to create Post model
const postSchema = new Schema(
  {
    text: String,
    username: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

// Initialize our Post model
const Post = model("post", postSchema);

module.exports = Post;
