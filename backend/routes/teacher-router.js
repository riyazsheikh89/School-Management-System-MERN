const express = require("express");
const router = express.Router();
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher-controller");

// Route for creating a new teacher
router.post("/create", createTeacher);

// Route for getting all teachers
router.get("/get-all", getAllTeachers);

// Route for getting a single teacher by ID
router.get("/get/:id", getTeacherById);

// Route for updating a teacher by ID
router.put("/update/:id", updateTeacher);

// Route for deleting a teacher by ID
router.delete("/delete/:id", deleteTeacher);

module.exports = router;