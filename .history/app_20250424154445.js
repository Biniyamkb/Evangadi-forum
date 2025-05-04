const express = require("express");
const app = express();
const port = 5500;

//db connection 
const dbConnection=require("./db/dbConfig")

//user routes middleware file
const userRouters = require("./routes/userRoute");
app.use("/api/users", userRouters);

async function start() {
    
}
try {
    await dbConnection.execute("select 'test'")
    
} catch (error) {
    console.log(error.message)
}



app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listening on ${port}`);
  }
});

