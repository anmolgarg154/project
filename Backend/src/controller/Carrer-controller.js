import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";


export const Carrer = asyncHandler(async(req,res)=>{
    const {FullName , Email , Phone , Description , Role } = req.body


    if(!FullName || !Email || !Phone || !Description || !Role){
       // throw new ApiError(400, "All fields are required");
        return res.status(400).json({message: "All fields are required"});
    }
})