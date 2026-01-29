import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Usermodel } from "../Models/User-model.js";

export const verifyJWT = asyncHandler(async(req, res, next) => {
  const token = req.cookies?.Access_Token_Secret   || req.header("Authorization")?.replace("Bearer " , "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.Access_Token_Secret);
    const user = await Usermodel.findById(decodedToken?._id).select("-Password, -refreshTokens")
    if(!user){
      throw new ApiError(401, "Invalid Access Token")
    }
    req.user = user
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid or expired Access token");
  }
});
