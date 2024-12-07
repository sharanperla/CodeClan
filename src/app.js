const express=require('express');

const app=express()

//request handler function 
app.use("/namasthe",(req,res)=>{
    res.send("hello namasthe")
})

app.use("/",(req,res)=>{
          res.send("hello from the server")
})
app.listen(3000,()=>{
    console.log("listeninig");
})