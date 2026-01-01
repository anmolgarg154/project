import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse
} from "../controller/Course-controller.js";

import { upload } from "../middleware/upload.middleware.js";

const router = Router();

router.route("/create").post(
  upload.single("image"), // field name from frontend
  createCourse
);


router.get("/all", getAllCourses);

router.get("/:id", getSingleCourse);

router.put("/_Id",updateCourse)

router.delete("/delete",deleteCourse)

export default router;
