// // // // // // VARIABLES // // // // // //

const express = require("express");

const app = express();

const port = process.env.port || 5000;

// // // // // // DEFINE ROUTES // // // // // //

app.use("/api/user", require("./routes/users"));

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