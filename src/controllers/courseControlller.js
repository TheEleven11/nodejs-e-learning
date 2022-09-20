import {
  deleteOne,
  updateOne,
  getOne,
  getAll,
  createOne,
} from './handlerFactory.js';
import Course from '../models/courseModel.js';
import Result from '../models/resultModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllCourses = getAll(Course);

export const getCourse = getOne(Course, [
  {
    path: 'teacher',
    select: 'name email',
  },
  { path: 'topics', select: 'title index lessons -course' },
  { path: 'members', select: 'student -course -_id' },
  { path: 'discussions', select: 'topic user answers -course' },
]);

export const createCourse = createOne(Course);

export const updateCourse = updateOne(Course);

export const deleteCourse = deleteOne(Course);

export const getRegisteredCourses = catchAsync(async (req, res, next) => {
  const results = await Result.find({ student: req.user.id });
  const courses = results.map((result) => result.course);

  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: courses,
  });
});
