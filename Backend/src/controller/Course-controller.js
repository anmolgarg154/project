import { asyncHandler } from "../utils/asyncHandler.js";
import {CourseModel} from "../Models/course-model.js"

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
