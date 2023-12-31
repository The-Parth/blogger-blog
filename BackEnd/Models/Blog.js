const mongoose= require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:false
    },

    date:{
        type:Date,
        default:Date.now
    },

});

module.exports=mongoose.model('blogs',blogsSchema);