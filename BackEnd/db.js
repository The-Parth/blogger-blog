const mongoose=require('mongoose');

const URI='mongodb+srv://toyash:DXpr3TB1zjI0ohrX@blogger.oqzxv4k.mongodb.net/'

const connectToMongo= async ()=>{
    await mongoose.connect(URI);
    console.log("Connected to Database");
}

module.exports=connectToMongo;