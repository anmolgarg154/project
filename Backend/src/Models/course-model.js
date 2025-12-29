import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  courseName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  image: {
    type: String,    
  },
  subtitle: {
    type: String,
    required: true
  },
  description: String,
  duration: String,
  level: String,
  features: {
    type: [String] // or Object
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export const CourseModel = mongoose.model("Course", courseSchema);
