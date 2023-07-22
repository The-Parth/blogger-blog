const express=require('express');
const app=express();
const cors=require("cors");
const connectToMongo =require("./db")

app.use(cors())
app.use(express.json())


const Port=5000;

connectToMongo();

app.use('/api/auth', require('./Routes/auth.js'))
app.use('/api/blogs', require('./Routes/blogs.js'))


app.listen(Port,()=>{
    console.log('Server Started')
})