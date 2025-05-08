//import express
const express = require("express");
//import mysql2
const mysql = require("mysql2");
const app = express();
// define the connection to parameters fr the database
const dbconfig = {
  connectionlimit: 10,
  socketPath: "/Application/MAMP/tmp/mysql.sock",
  password: "demoapp",
  user: "demoapp",
  host: "127.0.0.1",
  database: "demoapp",
};
//create the connection to the database
const connection = mysql.createConnection(dbconfig);
//connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database!");
});

app.get("/", (req, res) => {
  res.send("Testing!");
});

const port = 4000;
app.listen(port, () => console.log(`Listening On port ${port}`));
