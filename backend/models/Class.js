const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    teachers: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        maxLength: 7
        }
    ],
    students: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        maxLength: 50
        }
    ]
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
