const express = require("express");
const router = express.Router();

// authonthication middleware
//user controllers 
const {register,login,checkUser}=require('../controller/userController')


//register route
router.post("/register", register);

//login user
router.post("/login", login);

//check user
router.get("/check", checkUser);

module.exports = router;
