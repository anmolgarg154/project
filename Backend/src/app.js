import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();


app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(cookieParser());


// Importing Routes

import UserRoute from "./routes/User-route.js"
import CourseRoute from "./routes/Course-route.js"

// routes declartion

app.use("/api/v1/users",UserRoute);
app.use("/api/v1/course", CourseRoute)

export default app;
