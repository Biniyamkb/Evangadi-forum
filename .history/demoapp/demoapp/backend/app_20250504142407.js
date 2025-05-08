//import express
const express = require("express");
//import mysql2
const mysql = require("mysql2");
const app = express();






app.get("/", (req, res) => {
  res.send("Testing!");
});

const port = 4000;
app.listen(port, () => console.log(`Listening On port ${port}`));

