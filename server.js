// // // // // // VARIABLES // // // // // //

const express = require("express");
const app = express();
const port = process.env.port || 5000;
const connectDB = require("./config/db.js");

// // // // // // CONNECTING TO DB // // // // // //

connectDB();

// // // // // // DEFINE ROUTES && APP USES  // // // // // //

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));

app.use("/api/auth", require("./routes/auth"));

app.use("/api/contacts", require("./routes/contacts"));

// // // // // // APP LISTENER // // // // // //

app.listen(port, () => console.log(`Server port is ${port}`));

// // // // // // GET METHOLD // // // // // //

app.get("/", (req, res) => {
  //   console.log(req.params);

  let testDict = {
    name: "John",
    contact: "082 345 6789",
  };
  res.json(testDict);
});
