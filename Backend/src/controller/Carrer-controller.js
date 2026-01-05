import { asyncHandler } from "../utils/asyncHandler";


export const Carrer = asyncHandler(async(req,res)=>{
    const {FullName , Email , Phone , Description , Role } = req.body
})