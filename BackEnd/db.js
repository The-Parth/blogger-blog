const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const URI = process.env.ATLAS_URI;

const connectToMongo= async ()=>{
    await mongoose.connect(URI);
    console.log("Connected to Database");
}

module.exports=connectToMongo;