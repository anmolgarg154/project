import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { Usermodel } from "../Models/User-model.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req, res)=>
    {
    
    const {Username, Email, PhoneNumber, Password} = req.body;
    console.log("Email : ",Email)
     console.log("Username : ",Username);
      console.log("Phone Number : ",PhoneNumber)
    console.log("Password :", Password);

    if (!Username || !Email || !PhoneNumber || !Password) {
    throw new ApiError(400, "All fields are required");
}


    // if([Username,Email,Password].some((fields)=>fields.trim()==="")){
    //     throw new ApiError(400, "All fields must be filled")
    // }

   const existedUser = await Usermodel.findOne({Email});

   if(existedUser){
        throw new ApiError(409, "User with email or username already exists")
   }

   const newUser = await Usermodel.create({
        Username,
        Email,
        PhoneNumber,
        Password
   })

   return res.status(201).json(
      new ApiResponse(200, newUser,"User register successfully")
   )

})

let LoginUser = asyncHandler(async (req,res)=>{
   
    console.log('1',LoginUser);  
    const { Email,Password } = req.body
    console.log("login data",req.body);

    if( Email === "" || Password === "" ){
        throw new ApiError(400,"Both fields are required")
    }

   const UserFind =  await Usermodel.findOne({
      $and : [{Email}]
   })
    
   if(!UserFind){
    throw new ApiError(401,"User does not exist")
   }

   const loginInUser = await Usermodel.findById(UserFind._id).select("-Password")

//    FOR ADDING COOKIES

//    const option ={
//     httpOnly:true,
//     secure:true
//    }
   
   return res.status(200).json(
      new ApiResponse(200,{loginInUser},"login deatils wrong")
   )


})


export {registerUser ,LoginUser};















































































// const registerUser = asyncHandler(async(req, res)=>{
//     res.status(200).json({
//         message:"chai air code "
//     })
//     console.log("register success")
// })

// export {registerUser};