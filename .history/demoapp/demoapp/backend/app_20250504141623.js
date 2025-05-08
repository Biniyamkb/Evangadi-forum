//import express
const express=require('express');
app.get('/',(req,res)=>{
    res.send('Test')
})

const port=4000;
app.listen(port,()=>console.log(`Listening On port ${port}`))
