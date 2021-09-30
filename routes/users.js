// // // // // // VARIABLES // // // // // //

const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

// // // // // // EXPORTING ROUTER // // // // // //

module.exports = router;

// // // // // // POST METHOLDS // // // // // //

router.post(
  "/",
  [
    check("name", "Please enter your name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (user) {
        res.status(404).json({ msg: "User already exists" });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send("User saved");
    } catch (err) {
      console.error(err.message);
      res.status(543).send("Server Error");
    }
  }
);
