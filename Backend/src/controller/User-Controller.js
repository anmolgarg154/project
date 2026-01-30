import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { Usermodel } from "../Models/User-model.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const generateAccessAndRefreshToken = async(userId)=>{
  try {
    const User1 = await Usermodel.findById(userId);
    const accessToken = User1.generateAccessToken();
    const refreshToken = User1.generateRefreshToken();
    
    User1.refreshTokens = refreshToken
    await User1.save({validateBeforeSave:false})

    return{accessToken , refreshToken}


  } catch (error) {
    throw new ApiError(500, "something went wrong while generatig token")
  }
}

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

const LoginUser = asyncHandler(async (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    throw new ApiError(400, "Both fields are required");
  }

  const UserFind = await Usermodel.findOne({  Email });

  if (!UserFind) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await UserFind.isPasswordCorrect(Password);
  console.log("Password valid:", isPasswordValid);

  if (!isPasswordValid) {
    throw new ApiError(401, "Password is incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(UserFind._id);

  const loggedUser = await Usermodel.findById(UserFind._id).select("-Password")

  const options = {
    httpOnly :true,
    secure:false,
    sameSite:"lax"
  }

  

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
         new ApiResponse(
          
          200,
         { 
          User: loggedUser , accessToken, refreshToken 
        }, 
         "login successfully")
    );
});
const LogoutUser = asyncHandler(async(req,res)=>{
   await Usermodel.findByIdAndUpdate(
     req.user._id,
     { $unset: { refreshTokens: 1 } },
     { new: true }
   );

   const options = {
     httpOnly: true,
     secure: false,
     sameSite: "lax"
   };

   return res
     .status(200)
     .clearCookie("accessToken", options)
     .clearCookie("refreshToken", options)
     .json(new ApiResponse(200, {}, "User Logout Successfully"));
});



export {registerUser ,LoginUser ,LogoutUser};















































































// const registerUser = asyncHandler(async(req, res)=>{
//     res.status(200).json({
//         message:"chai air code "
//     })
//     console.log("register success")
// })

// export {registerUser};