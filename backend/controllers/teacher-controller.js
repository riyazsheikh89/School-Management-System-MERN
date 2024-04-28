const Teacher = require('../models/Teacher.js');

// Create a new teacher
const createTeacher = async (req, res) => {
    try {
        const newTeacher = await Teacher.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfuly registered a new Teacher",
            data: newTeacher,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to registered the Teacher!",
            data: {},
            err: error
        });
    }
};

// Get all teachers
const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        return res.status(200).json({
            success: true,
            message: "Successfuly fetched list of all teachers",
            data: teachers,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to get the Teachers info!",
            data: {},
            err: error
        });
    }
};

// Get a single teacher by ID
const getTeacherById = async (req, res) => {
    try {
        const teacherId = req.params.id;
        const foundTeacher = await Teacher.findById(teacherId);
        if (!foundTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Successfuly fetched the teacher",
            data: foundTeacher,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to find the Teachers info!",
            data: {},
            err: error
        });
    }
};

// Update a teacher by ID
const updateTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id;
        const updatedTeacher = await Teacher.findByIdAndUpdate(teacherId, req.body, { new: true });
        if (!updatedTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Successfuly updated the teacher info",
            data: updatedTeacher,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to updte the Teachers info!",
            data: {},
            err: error
        });
    }
};

// Delete a teacher by ID
const deleteTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id;
        const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);
        if (!deletedTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Successfuly deleted the teacher",
            data: deletedTeacher,
            err: {}
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Unable to delete the Teachers info!",
            data: {},
            err: error
        });
    }
};

module.exports = {
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher
};
