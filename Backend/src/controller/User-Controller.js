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

const LoginUser = asyncHandler(async (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    throw new ApiError(400, "Both fields are required");
  }

  const UserFind = await Usermodel.findOne({ Email });
  if (!UserFind) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await UserFind.isPasswordCorrect(Password);
  console.log("Password valid:", isPasswordValid);

  if (!isPasswordValid) {
    throw new ApiError(401, "Password incorrect");
  }

  const loginInUser = UserFind.toObject();
  delete loginInUser.Password;

  return res.status(200).json(
    new ApiResponse(200, { loginInUser }, "login successfully")
  );
});

const LogoutUser = asyncHandler(async(req,res)=>{
   
})


export {registerUser ,LoginUser};















































































// const registerUser = asyncHandler(async(req, res)=>{
//     res.status(200).json({
//         message:"chai air code "
//     })
//     console.log("register success")
// })

// export {registerUser};