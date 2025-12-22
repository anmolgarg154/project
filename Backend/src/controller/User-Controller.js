import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { Usermodel } from "../Models/User-model.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req, res)=>{
    
    const {Username, Email, Password} = req.body;
    console.log("Email : ",Email);
    console.log("Password :", Password);

    if(Username == "" && Email == "" && Password == ""){
        throw new ApiError(400, "All fields are required")
    }

    if([Username,Email,Password].some((fields)=>fields.trim()==="")){
        throw new ApiError(400, "All fields must be filled")
    }

   const existedUser =  Usermodel.findOne({Email});

   if(existedUser){
        throw new ApiError(409, "User with email or username already exists")
   }

   const newUser = await Usermodel.create({
        Username,
        Email,
        Password
   })

   const createdUser = await Usermodel.FindById(newUser._id).select("-Password -refreshToken");

   if(!createdUser){
    throw new ApiError(500, "Unable to create user. Please try again ");
   }

   return res.status(201).json(
      new ApiResponse(200, newUser, createdUser,"User register successfully")
   )

})


export {registerUser};















































































// const registerUser = asyncHandler(async(req, res)=>{
//     res.status(200).json({
//         message:"chai air code "
//     })
//     console.log("register success")
// })

// export {registerUser};