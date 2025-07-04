const express = require("express");
const router = express.Router();
//user controllers 
const {register,login,checkUser}=require('../controller/userController')


//register route
router.post("/register", register);

//login user
router.post("/login", login);

//check user
router.get("/check",auth checkUser);

module.exports = router;
