import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

export const verifyJWT = asyncHandler(async(req, res, next)=>{
   const token = req.cookie?.req.header('Authorization')?.replace('Bearer ', '')
   if(!token){
    throw new ApiError('Unauthorized',401);
   }

   if(token !== 'valid-token'){
    
   }
})