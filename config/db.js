// // // // // // VARIABLES // // // // // //

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// // // // // // CONNECTING DB // // // // // //

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB has connected"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

// // // // // // EXPORTING MODULE // // // // // //

module.exports = connectDB;
