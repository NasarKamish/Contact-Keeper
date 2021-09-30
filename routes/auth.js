// // // // // // VARIABLES // // // // // //

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// // // // // // EXPORTING ROUTER // // // // // //

module.exports = router;

// // // // // // GET METHOLDS // // // // // //

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// // // // // // POST METHOLDS // // // // // //

router.post("/", (req, res) => {
  res.send("Log in user");
});
