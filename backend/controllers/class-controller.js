const Class = require('../models/Class');

// Create a new class
const createClass = async (req, res) => {
    try {
        const newClass = await Class.create(req.body);
        return res.status(200).json({
            success: true,
            message: "Successfuly created a new class",
            data: newClass,
            err: {}
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Unable to create new class!",
            data: {},
            err: error
        });
    }
};

// Get all classes
const getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        return res.status(200).json({
            success: true,
            message: "Successfuly fetched all classes",
            data: classes,
            err: {}
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Unable to fetched all classes!",
            data: {},
            err: error
        });
    }
};

// Get a single class by ID
const getClassById = async (req, res) => {
    try {
        const classId = req.params.id;
        const foundClass = await Class.findById(classId);
        if (!foundClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Successfuly fetched the class",
            data: foundClass,
            err: {}
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Unable to fetche the class!",
            data: {},
            err: error
        });
    }
};

// Update a class by ID
const updateClass = async (req, res) => {
    try {
        const classId = req.params.id;
        const updatedClass = await Class.findByIdAndUpdate(classId, req.body, { new: true });
        if (!updatedClass) {
            return res.status(404).json({ message: 'No class found with the given ID!' });
        }
        return res.status(200).json({
            success: true,
            message: "Successfuly updated the class",
            data: updatedClass,
            err: {}
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Unable to update the class!",
            data: {},
            err: error
        });
    }
};

// Delete a class by ID
const deleteClass = async (req, res) => {
    try {
        const classId = req.params.id;
        const deletedClass = await Class.findByIdAndDelete(classId);
        if (!deletedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Class deleted successfuly",
            data: deletedClass,
            err: {}
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Unable to delete the class!",
            data: {},
            err: error
        });
    }
};

module.exports = {
    createClass,
    getAllClasses,
    getClassById,
    updateClass,
    deleteClass
};
