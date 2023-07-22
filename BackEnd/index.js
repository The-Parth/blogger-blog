const express=require('express');
const app=express();
const cors=require("cors");
const connectToMongo =require("./db")

app.use(cors())
app.use(express.json())

var bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: "1mb", extended: true, parameterLimit:50000}));
// app.use(bodyParser.urlencoded({limit: "1mb", extended: true, parameterLimit:50000}));
app.use(bodyParser());

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));


const Port=5000;

connectToMongo();

app.use('/api/auth', require('./Routes/auth.js'))
app.use('/api/blogs', require('./Routes/blogs.js'))


app.listen(Port,()=>{
    console.log('Server Started')
})