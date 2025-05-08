//import express
const express = require("express");
//import mysql2
const mysql = require("mysql2");
const app = express();
// define the connection to parameters fr the database
const dbconfig = {
  connectionLimit: 10,

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

app.use(express.json());

// Post request handler to add a new employee to the database
app.post("/add-employee", (req, res) => {
  console.log(req.body);
  // write the sql query to add to the database table named employee_test
  const sql = `INSERT INTO employee_test (first_name, last_name, email,password) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.password}')`;
  //execute the sql query
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      res.status(500).send("Error inserting data");
      return;
    }
    const response = {
      status: "success",
      message: "Employee added successfully",
    };
    res.status(200).json(response);
  });
});

//Post request handler to login an employee withe came to thise path /login
app.post("/login", (req, res) => {
  //write the sql query to retrieve the employee with the email compare it with the data in the database
  const sql = `SELECT * FROM employee_test WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
  //execute the sql query
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error retrieving data: ", err);
      res.status(500).send("Error retrieving data");
      return;
    }
    if (result.length > 0) {
      const response = {
        status: "success",
        message: "Login successful",
        data: result,
      };
      res.status(200).json(response);
    } else {
      const response = {
        status: "error",
        message: "Invalid email or password",
      };
      res.status(401).json(response);
    }
  });
  
});

//Allow Cors to all
app.use((req, res, next) => {
  res.setHeader       ("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("OPTIONS", "GET, POST, PUT, DELETE");



  res

});
//import cors
const cors = require("cors");
app.use(cors());

const port = 4000;
app.listen(port, () => console.log(`Listening On port ${port}`));
