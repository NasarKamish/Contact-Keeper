// // // // // // VARIABLES // // // // // //

const jwt = require("jsonwebtoken");
const config = require("config");

// // // // // // EXPORTING MODULES // // // // // //

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(404).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(404).json({ msg: "Token is not valid" });
  }
};
