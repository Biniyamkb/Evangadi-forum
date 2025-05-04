//db connection
const bdConnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");



async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!username || !firstname || !lastname || !email || !password) {
    return res.status(400).json({ msg: "please provide all required fields" });
  }

  try {
    const [user] = await bdConnection.query(
      "select username,userid from users where username=? or email=?",
      [username, email]
    );
    // return res.status(400).json(user.length);
    if (user.length > 0) {
      return res.status(400).json({ msg: "user alredy existed" });
    }

    if (password.length <= 8) {
      return res
        .status(400)
        .json({ msg: "password must be at least 8 charachter" });
    }

      //encrypt the password
      const salt=await bcrypt
      const hashedPassword=await bcrypt.hash(password,)
    await bdConnection.query(
      "INSERT INTO users (username,firstname,lastname,email,password) VALUES(?,?,?,?,?)",
      [username, firstname, lastname, email, password]
    );
    return res.status(201).json({ msg: "user registered " });
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
