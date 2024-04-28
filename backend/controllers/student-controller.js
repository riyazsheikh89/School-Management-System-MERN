const Student = require('../models/Student.js');

// Create a new student
const createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfuly registered a new Student",
            data: newStudent,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to registered the student!",
            data: {},
            err: error
        });
    }
};

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json({
            success: true,
            message: "Successfuly fetched all students",
            data: students,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to fetch the list of students!",
            data: {},
            err: error
        });
    }
};

// Get a single student by ID
const getStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const foundStudent = await Student.findById(studentId);
        if (!foundStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Successfuly fetched the student",
            data: foundStudent,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to find the student!",
            data: {},
            err: error
        });
    }
};

// Update a student by ID
const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const updatedStudent = await Student.findByIdAndUpdate(studentId, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Successfuly updated student information",
            data: updatedStudent,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to update the student information!",
            data: {},
            err: error
        });
    }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const deletedStudent = await Student.findByIdAndDelete(studentId);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Successfuly deleted student",
            data: updatedStudent,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to delete the student!",
            data: {},
            err: error
        });
    }
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
