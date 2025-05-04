const express = require("express");
const app = express();
const port = 5500;

app.get('/',(req,res)=>{
    res.send("welocme")
})

//register route
app.post("/api")







app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listening on ${port}`);
  }
});
