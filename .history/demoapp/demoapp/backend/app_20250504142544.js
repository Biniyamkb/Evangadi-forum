//import express
const express = require("express");
//import mysql2
const mysql = require("mysql2");
const app = express();
// define the connection to parameters fr the database
const dbconfig={
    connectionlimit: 10,
    password: "demoapp",
    user: "demoapp",
}



app.get("/", (req, res) => {
  res.send("Testing!");
});

const port = 4000;
app.listen(port, () => console.log(`Listening On port ${port}`));

