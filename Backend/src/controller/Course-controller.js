import { Course } from "../models/course.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createCourse = asyncHandler(async (req, res) => {

  // 1️⃣ Text data from form
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

  // 2️⃣ Image from multer
  const image = req.file?.path;

  if (!image) {
    return res.status(400).json({ message: "Image is required" });
  }

  // 3️⃣ Save to DB
  const course = await Course.create({
    id,
    courseName,
    image,
    subtitle,
    duration,
    description,
    level,
    features: JSON.parse(features), // important
    price
  });

  res.status(201).json({
    success: true,
    data: course
  });
});
