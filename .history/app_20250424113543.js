const express=require('express');
const app=express();

const port = 5500
app.listen(5000,(err)=>{
    if(err){
        console.log(err.message)
    }
})