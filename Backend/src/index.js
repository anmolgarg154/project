import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express()


app.get("/",(req,res)=>{
    res.send("hello gfvhdbj hfdb")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening at port http://localhost:${process.env.PORT}`)
})