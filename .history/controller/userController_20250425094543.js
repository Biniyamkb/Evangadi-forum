//db connection
const bdConnection = require("../db/dbConfig");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!username || !firstname || !lastname || !email || !password);
  return res.status(40).json({ msg: "please provide all required fields" });
}

async function login(req, res) {
  res.send("login");
}

async function checkUser(req, res) {
  res.send("check");
}

module.exports = { register, login, checkUser };
