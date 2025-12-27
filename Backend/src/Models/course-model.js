import mongoose from "mongoose";

const courseSchmea = mongoose.model({
     id:{
        type:Number,
        required:true,
        trim:true
     },
    courseName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    Image:{},
    subtitle:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    duration:{
        type :String
    },
    level:{
        type:String
    },
    features:{
        type:String
    },
    price:{
        type:Number,
        required:true,
        trim:true
    }

}
)

export const CourseModel = mongoose.Schema("Courses",courseSchmea);