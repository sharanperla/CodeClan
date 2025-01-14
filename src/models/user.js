const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required:true,
    minLength:3,
    maxLength:50,
  },
  lastName: {
    type: String,
    maxLength:50,
  },
  emailId: {
    type: String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
  },
  password: {
    type: String,
    required:true,
  },
  age: {
    type: Number,
    min:18,
  },
  gender: {
    type: String,
    //only runs when create not on update:make runValidators:true when doing a request
    validate(value){
      if(!["male","female","others"].includes(value))
      {
        throw new Error("gender is invalid") 
      }
    }
  },
},{
  timestamps:true
});

const User=mongoose.model("User",userSchema);
module.exports=User
