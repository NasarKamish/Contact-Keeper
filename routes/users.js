// // // // // // VARIABLES // // // // // //

const express = require("express");

const router = express.Router();

// // // // // // EXPORTING ROUTER // // // // // //

module.exports = router;

// // // // // // POST METHOLDS // // // // // //

router.post("/", (req, res) => {
  res.send("Register user");
});
