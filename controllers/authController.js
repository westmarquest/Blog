// authController.js

const withAuth = require("../utils/auth");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {
  renderSignup: async (req, res) => {
    res.render("signup");
  },

  newUser: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getLogin: async (req, res) => {
    res.render("login");
  },

  login: async (req, res) => {
    try {
      // Find user by email
      let userData = await User.findOne({ where: { email: req.body.email } });

      if (!userData) {
        // If user not found, return error
        return res.status(400).json({ message: "Incorrect email or password" });
      }

      // Check if password is valid directly on userData
      if (userData.checkPassword(req.body.password)) {
        // If password is invalid, return error
        return res.status(400).json({ message: "Incorrect email or password" });
      }

      // Save user id in session
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Send success message
      res.json({ user: userData, message: "You are now logged in!" });
    } catch (err) {
      // Handle other errors
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  logout: async (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
};

module.exports = authController;
