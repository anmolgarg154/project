import mongoose from "mongoose";

const CarrerSchema = mongoose.Schema({
    FullName:{
        type:String
    },
    Email:String,
    PhoneNumber:String,
    description: String,
    Role:String,
    Resume:File

})

export const CarrerModle = mongoose.model("carrer",CarrerSchema)