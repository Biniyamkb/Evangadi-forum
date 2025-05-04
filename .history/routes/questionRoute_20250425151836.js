const express = require("express");
const router = express.Router();

// authonthication middleware
const authMiddleware = require("../middleware/authMIddleware");

router.get(".", authMiddleware, (req, res) => {
  res.send("all quesstion");
});

module.exports = router;
