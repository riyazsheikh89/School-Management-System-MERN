const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        maxLength: 10
    },
    feesPaid: {
        type: Boolean,
        default: false,
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
