// // // // // // VARIABLES // // // // // //

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contact");

// // // // // // EXPORTING ROUTER // // // // // //

module.exports = router;

// // // // // // GET METHOLDS // // // // // //

router.get("/", auth, async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
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
