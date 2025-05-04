const express = require("express");
const router = express.Router();

//register route
router.post("/register", (req, res) => {
  res.send("register user");
});

//login user
router.post("/login", lo);

//check user
router.get("/check", (req, res) => {
  res.send("check user");
});

module.exports = router;
