// const { userDb, postDb, commentDb } = require("../db/db");
// const User = require("../models/User");
// const Post = require("../models/Post");
// const Comment = require("../models/Comment");
// const req = require("express/lib/request");
// const res = require("express/lib/response");

// Fetch user posts and comments from the server when the page loads
window.addEventListener("DOMContentLoaded", () => {
  fetch("/user/posts")
    .then((response) => response.json())
    .then((data) => {
      // Call the function to populate user posts
      fetchUserPosts(data.userPosts);
    })
    .catch((error) => {
      console.error("Error fetching user posts:", error);
    });

  fetch("/user/comments")
    .then((response) => response.json())
    .then((data) => {
      // Call the function to populate user comments
      fetchUserComments(data.userComments);
    })
    .catch((error) => {
      console.error("Error fetching user comments:", error);
    });
});

// Function to populate user posts
const fetchUserPosts = (userPosts) => {
  const userPostsContainer = document.getElementById("user-posts-content");
  if (userPosts.length > 0) {
    userPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `<h4>${post.title}</h4><p>${post.content}</p>`;
      userPostsContainer.appendChild(postElement);
    });
  } else {
    userPostsContainer.innerHTML = "<p>No posts yet</p>";
  }
};

// Function to populate user comments
const fetchUserComments = (userComments) => {
  const userCommentsContainer = document.getElementById(
    "user-comments-content"
  );
  if (userComments.length > 0) {
    userComments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.innerHTML = `<p>${comment.content}</p>`;
      userCommentsContainer.appendChild(commentElement);
    });
  } else {
    userCommentsContainer.innerHTML = "<p>No comments yet</p>";
  }
};

// const dashboard = {
//   fetchUserPosts,
//   fetchUserComments,
// };

// // Export the dashboard object
// module.exports = dashboard;
