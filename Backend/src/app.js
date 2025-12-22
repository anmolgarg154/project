import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


// Importing Routes

import UserRoute from "./routes/User-route.js"

// routes declartion

app.use("/api/v1/users",UserRoute);

export default app;
