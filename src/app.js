const express = require("express");
const connectDB = require("./config/database.js");
const app = express();

// const User=require("./models/user")

//request handler function

// app.use("/",(req,res,next)=>{
//       const token=false
//       if(token){
//         next()
//       }else{
//         res.status(404).send("unothorized")
//       }
// })

// app.use("/",(req,res,next)=>{
//     console.log("inside middleware")
//     // next()  //if we callmiddleware before sending it will send the middleware respose and will break the server
//     //res.send("listeninig 1");  //not possible
//     next()
// },
// (req,res)=>{
//     res.send("listeninig 2");
// })


// app.post("/signup",async (req,res)=>{

//   const user=new User({
//     firstName:"sharan",
//     lastName:"sharan",
//     emailId:"sharan",
//     passord:"sharan",
//     age:18,
//     gender:"sharan",

//   })
//   await user.save();
//   res.send("user added successfully")
// })

app.get("/",(req,res)=>{
  res.send("hello")
})






connectDB()
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000, () => {
      console.log("listeninig");
    }); 
  
  })
  .catch((err) => {
    console.error("Cant connect to DB",err.message);
  });
  
