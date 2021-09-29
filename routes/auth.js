// // // // // // VARIABLES // // // // // //

const express = require("express");

const router = express.Router();

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
