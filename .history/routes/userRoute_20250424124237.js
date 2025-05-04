const express = require("express");
const router = express.Router();

//register route
router.post("/api/users/register", (req, res) => {
  res.send("register user");
});

//login user
app.post("/api/users/login", (req, res) => {
  res.send("login user");
});

//check user
app.get("/api/users/check", (req, res) => {
  res.send("check user");
});
