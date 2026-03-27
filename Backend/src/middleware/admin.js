import jwt from "jsonwebtoken";
import { Usermodel } from "../Models/User-model.js";

export const verifyJWT = async (req, res, next) => {
  try {
    // get token from cookie OR header
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    console.log("TOKEN:", token);

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.Access_Token_Secret);

    const user = await Usermodel.findById(decoded._id).select("-Password");

    if (!user) {
      return res.status(401).json({ message: "Invalid user" });
    }

    req.user = user; // 🔥 VERY IMPORTANT

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};