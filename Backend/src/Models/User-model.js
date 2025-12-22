import mongoose from "mongoose";

let UserSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    Password: {
        type: String,
        required: [true, "Password is required"],
         unique: true,
        lowercase: true,
        trim:true
    }
})
 
export const Usermodel = mongoose.model("USers-rergister", UserSchema);