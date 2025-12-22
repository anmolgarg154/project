import dotenv from "dotenv";
import app from "./app.js"
import connectDb from "./db/Db.js"

dotenv.config();

const port = 5000;


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


