const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    salary: {
        type: Number,
        required: true,
    },
    assignedClass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
    },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
