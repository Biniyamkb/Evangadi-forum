//db connection 



function register(req, res) {
  res.send("register");
}


function login(req, res) {
  res.send("login");
}


function checkUser(req, res) {
  res.send("check");
}


module.exports={register,login,checkUser}