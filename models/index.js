// const User = require('./User');
// const Post = require('./Post');
// const Comment = require('./Comment');

// // Define associations between models
// User.hasMany(Post, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE',
// });
// Post.belongsTo(User, {
//   foreignKey: 'userId',
// });

// Post.hasMany(Comment, {
//   foreignKey: 'postId',
//   onDelete: 'CASCADE',
// });
// Comment.belongsTo(Post, {
//   foreignKey: 'postId',
// });

// User.hasMany(Comment, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE',
// });
// Comment.belongsTo(User, {
//   foreignKey: 'userId',
// });

// module.exports = {
//   User,
//   Post,
//   Comment,
// };

const Post = require("./Post");
const Comment = require("./Comment");
const User = require("./User");

module.exports = { Post, Comment, User };
