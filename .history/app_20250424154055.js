const express = require("express");
const app = express();
const port = 5500;

//db connection 
module.exports = dbConnection.promise();
cons

//user routes middleware file
const userRouters = require("./routes/userRoute");
app.use("/api/users", userRouters);

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listening on ${port}`);
  }
});

