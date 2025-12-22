import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db/Db.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

connectDb()
 .then(()=>{
    app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
})
 .catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
 })




// app.get("/", (req, res) => {
//     res.send("Backend is running");
// });


