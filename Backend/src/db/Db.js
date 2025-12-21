import mongoose from "mongoose";

let connectDb = async ()=>{
    try {
        let connection =  await  mongoose.connect('mongodb+srv://anmolgarg1077:VVSQk26yyeYcCaBY@cluster0.uqp1v.mongodb.net/Course-project');
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDb;