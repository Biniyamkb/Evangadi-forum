//db connection
const bdConnection = require("../db/dbConfig");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!username || !firstname || !lastname || !email || !password) {
    return res.status(400).json({ msg: "please provide all required fields" });
  }

  try {
       const [user]=await db.query("select username,userid from users where username=? or emai=?",[username,email])
       return res.json


    await bdConnection.query(
      "INSERT INTO users (username,firstname,lastname,email,password) VALUES(?,?,?,?,?)",
      [username, firstname, lastname, email, password]
    );
    return res.status(201).json({ msg: "user created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: "somting wrong, try again later!" });
  }
}

async function login(req, res) {
  res.send("login");
}

async function checkUser(req, res) {
  res.send("check");
}

module.exports = { register, login, checkUser };
