const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    role:{type:String,required:true,enum:["admin","owner","student"]}
})

export default userSchema;