import { asyncHandler } from "../utils/asyncHandler.js";
import {CourseModel} from "../Models/course-model.js"
import { ApiError } from "../utils/ApiError.js";

export const createCourse = asyncHandler(async (req, res) => {

  const {
    id,
    courseName,
    subtitle,
    duration,
    description,
    level,
    features,
    price
  } = req.body;

  const image = req.file?.path;

  if (!image) {
    return res.status(400).json({ message: "Image is required" });
  }

  const course = await CourseModel.create({
    id,
    courseName,
    image,
    subtitle,
    duration,
    description,
    level,
    features: Array.isArray(features) ? features : JSON.parse(features),
    price
  });

  res.status(201).json({
    success: true,
    data: course
  });
});


 // GET ALL COURSES  (GET)
// This API is used to FETCH all courses
// --------------------------------------------------------------------------

export const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await CourseModel.find(); // fetch all courses

  res.status(200).json({
    success: true,
    data: courses   
  });
});


// --------------------------------------------------------------------------

// GET SINGLE COURSE BY ID  (GET)
// This API fetches ONE course using custom id

// --------------------------------------------------------------------------


export const getSingleCourse = asyncHandler(async (req, res) => {
  const course = await CourseModel.findOne({ id: req.params.id });

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.status(200).json({
    success: true,
    data: course
  });
});


export const updateCourse = asyncHandler(async(req,res)=>{
 const update = await CourseModel.findByIdAndUpdate( req.params._Id, req.body, 
   { new: true}                  //  -- >  means after updation new info return by this {new : true}
 )
 
  if (!update) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.status(200).json({
    success: true,
    data: update
  });
})

export const deleteCourse = asyncHandler(async(req,res)=>{
  try {
    await CourseModel.findByIdAndDelete(req.params.id.req.body);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 
})

