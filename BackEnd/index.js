const express=require('express');
const app=express();

const Port=5000;

app.get("/",(req,res)=>{
    res.json({Name:"Toyash",Team:'Tech'});
})


app.listen(Port,()=>{
    console.log('Server Started')
})