//db connection
const bdConnection = require("../db/dbConfig");

async function register(req, res) {
  req.body
}

async function login(req, res) {
  res.send("login");
}

async function checkUser(req, res) {
  res.send("check");
}

module.exports = { register, login, checkUser };
