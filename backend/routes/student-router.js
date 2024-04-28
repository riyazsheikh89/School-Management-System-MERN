const express = require("express");
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/student-controller");

// Route for creating a new student
router.post("/create", createStudent);

// Route for getting all students
router.get("/get-all", getAllStudents);

// Route for getting a single student by ID
router.get("/get/:id", getStudentById);

// Route for updating a student by ID
router.put("/update/:id", updateStudent);

// Route for deleting a student by ID
router.delete("/delete/:id", deleteStudent);

module.exports = router;
