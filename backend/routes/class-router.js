const express = require("express");
const router = express.Router();
const {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass,
} = require("../controllers/class-controller.js");

// Route for creating a new class
router.post("/create", createClass);

// Route for getting all classes
router.get("/get-all", getAllClasses);

// Route for getting a single class by ID
router.get("/get/:id", getClassById);

// Route for updating a class by ID
router.put("/update/:id", updateClass);

// Route for deleting a class by ID
router.delete("/delete/:id", deleteClass);

module.exports = router;
