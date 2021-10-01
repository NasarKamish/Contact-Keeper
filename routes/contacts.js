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

router.post(
  "/",
  [auth, [check("name", "Please enter name").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

// // // // // // PUT METHOLDS // // // // // //

router.put("/", (req, res) => {
  res.send("Update Contact");
});

// // // // // // DELETE METHOLDS // // // // // //

router.delete("/", (req, res) => {
  res.send("Delete Contact");
});
