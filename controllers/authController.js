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
      let userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        userData = await User.create(req.body);
        req.session.logged_in = true; // Set logged_in to true for new users
      } else {
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
          res
            .status(400)
            .json({ message: "Incorrect email or password, please try again" });
          return;
        }
      }
      console.log("userData", userData);
      req.session.save(() => {
        req.session.user_id = userData.id;
        res.json({ user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
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
