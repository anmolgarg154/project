import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];
 
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(cookieParser());


// Importing Routes  

import UserRoute from "./routes/User-route.js"
import CourseRoute from "./routes/Course-route.js"
import { isAdmin } from "./middleware/admin.js";

// routes declartion

app.use("/api/v1/users",UserRoute);
app.use("/api/v1/course", CourseRoute)


app.use("/admin",isAdmin)

export default app;
