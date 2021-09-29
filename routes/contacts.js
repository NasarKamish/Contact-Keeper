// // // // // // VARIABLES // // // // // //

const express = require("express");

const router = express.Router();

// // // // // // EXPORTING ROUTER // // // // // //

module.exports = router;

// // // // // // GET METHOLDS // // // // // //

router.get("/", (req, res) => {
  res.send("Get all the Contacts");
});

// // // // // // POST METHOLDS // // // // // //

router.post("/", (req, res) => {
  res.send("Create Contact");
});

// // // // // // PUT METHOLDS // // // // // //

router.put("/", (req, res) => {
  res.send("Update Contact");
});

// // // // // // DELETE METHOLDS // // // // // //

router.delete("/", (req, res) => {
  res.send("Delete Contact");
});
