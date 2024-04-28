const express = require('express');
const classRouter = require('./class-router');
const studentRouter = require('./student-router');
const teacherRouter = require('./teacher-router');

const router = express.Router();

router.use('/class', classRouter);
router.use('/student', studentRouter);
router.use('/teacher', teacherRouter);

module.exports = router;