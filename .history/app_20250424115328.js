const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.send("welocme");
});

//register route
app.post("/api/users/register", (req, res) => {
  res.send("login user");
});

//login user
app.post("/api/users/login", (req, res) => {
  res.send("register user");
});

//check user 
app.get("/api/users/c", (req, res) => {
    res.send("register user");
  });



app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listening on ${port}`);
  }
});
