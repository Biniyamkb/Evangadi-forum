const express = require("express");
const router = express.Router();


router.get("/all-questions", (req, res) => {
  res.send("all quesstion");
});

module.exports = router;
