const express = require("express");
const router = express.Router();
//user


//register route
router.post("/register", register);

//login user
router.post("/login", login);

//check user
router.get("/check", checkUser);

module.exports = router;
