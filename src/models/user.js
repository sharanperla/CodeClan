const mongoose = require("mongoose");
const validator=require("validator")
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
    validate(value){
      if(!validator.isEmail(value))
      {
        throw new Error("Invalid email")
      }

    }
  },
  password: {
    type: String,
    required:true,
    validate(value){
      if(!validator.isStrongPassword(value))
      {
        throw new Error("Pasword is not strong")
      }

    }
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
  photoUrl:{
    type:String,
    default:"https://geographyandyou.com/images/user-profile.png",
    validate(value){
      if(!validator.isURL(value))
      {
        throw new Error("Invalid phto url")
      }

    }
  }
},{
  timestamps:true
});

const User=mongoose.model("User",userSchema);
module.exports=User
