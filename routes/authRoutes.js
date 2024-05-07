const express = require("express");
const router = require("express").Router();
// const bcrypt = require("bcrypt");
const withAuth = require("../utils/auth");
const User = require("../models/User");
const {
  renderSignup,
  newUser,
  getLogin,
  login,
  logout,
} = require("../controllers/authController");

router.get("/signup", renderSignup);
router.post("/signup", newUser);
router.get("/login", getLogin);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
