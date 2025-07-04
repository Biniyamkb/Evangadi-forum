const express = require("express");
const router = express.Router();
//user controllers 
const {register,login,check}=require('../controller/userController')
const {}

//register route
router.post("/register", register);

//login user
router.post("/login", login);

//check user
router.get("/check", check);

module.exports = router;
