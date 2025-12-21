import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express()
let port = 4000


app.get("/",(req,res)=>{
    res.send("hello gfvhdbj hfdb")
})
app.get("/api",(req,res)=>{
    res.json({message:"hello world"})
})

app.listen(port,()=>{
    console.log(`server running at port http://localhost:${port}`)
})

app.listen(process.env.PORT,()=>{
    console.log(`listening at port http://localhost:${process.env.PORT}`)
})