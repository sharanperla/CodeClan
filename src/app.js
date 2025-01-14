const express = require("express");
const connectDB = require("./config/database.js");
const User=require("./models/user.js")
const app = express();

app.use(express.json())

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




app.post("/signup",async (req,res)=>{

  const user=new User(req.body)
  await user.save();

  res.send("user added successfully")
  
})

app.post("/login",(req,res)=>{
  console.log(req.body)
})


app.get("/test",(req,res)=>{
  res.send("Hello world")
})


app.patch("/user/:userId",async (req,res)=>{
  const userId=req.params?.userId;
  const data= req.body;


  
 try {
  const ALLOWED_UPDATES=["photoUrl","gender","about","age","skills"];
  const  isUpdateAllowed=Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k))
  if(!isUpdateAllowed)
  {
    throw new Error("update not allowed")
  }
  const user=await User.findByIdAndUpdate({_id:userId},data,{
    returnDocument:"after",
    runValidators:true,
  })
  res.send("user upddated succesffully")
 } catch (error) {
  res.status(400).send("Update failed:"+error.message)
 }

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
  
