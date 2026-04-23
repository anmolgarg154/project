// import mysql from "mysql2/promise";

import mongoose from "mongoose";

// const connectDb = async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: process.env.MYSQL_HOST || "localhost",
//       user: process.env.MYSQL_USER || "root",
//       password: process.env.MYSQL_PASSWORD,
//       database: process.env.MYSQL_DATABASE || "node_app",
//       port: process.env.MYSQL_PORT || 3306,
//     });

//     console.log("DB connected");

//     return connection; // important
//   } catch (error) {
//     console.error("Error connecting to MySQL:", error);
//     process.exit(1);
//   }
// };

// export default connectDb;



const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    console.log("DB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDb;

// const connectdb = async () => {
//   try {
//     const mongo = await mongoose.connect(process.env.MONGODB_URI);

//     console.log("DB connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

// export default connectdb;