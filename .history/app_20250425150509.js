const express = require("express");
const app = express();
const port = 5500;

//db connection
const dbConnection = require("./db/dbConfig");

//user routes middleware file
const userRouters = require("./routes/userRoute");
 
//user router middleware file
const quesstionsRouter=require("./routes/questionRoute")
//json middleware extract json data
app.use(express.json());

//use router middleware
app.use("/api/users", userRouters);

async function start() {
  try {
    const ressult = await dbConnection.execute("select 'test'");
    app.listen(port);
    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();





// app.listen(port, (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`listening on ${port}`);
//   }
// });
