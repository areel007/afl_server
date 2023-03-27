const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// Registration
exports.registerController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  user.save((err) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.json({ msg: "User created!" });
    }
  });
};


// Login
exports.loginController = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else if (!user) {
      res.status(404).json({ msg: "User not found" });
    } else {
      if (req.body.password === user.password) {
        res.json({ msg: "Logged in!" });
      } else {
        res.status(401).json({ msg: "Wrong username or password" });
      }
    }
  });
};

exports.updateInvestment = (req, res) => {
  User.updateOne({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.json({ msg: "User updated!" });
    }
  });
};
