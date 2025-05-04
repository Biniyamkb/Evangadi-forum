const express = require("express");
const router = express.Router();

// authonthication middleware
const authMiddleware = require("../middleware/authMIddleware");
//user controllers
const { register, login, checkuser } = require("../controller/userController");

//register route
router.post("/register", register);

//login user
router.post("/login", login);

//check user
router.get("/check", authMiddleware, checkUser);

module.exports = router;
