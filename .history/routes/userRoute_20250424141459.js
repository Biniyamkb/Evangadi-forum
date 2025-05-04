const express = require("express");
const router = express.Router();

//register route
router.post("/register", (req, res) => {
  res.send("register user");
});

//login user
router.post("/login", login);

//check user
router.get("/check", ch);

module.exports = router;
