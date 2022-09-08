import Course from '../models/courseModel.js';
import catchAsync from '../utils/catchAsync.js';
import cleanObject from '../utils/cleanObject.js';
import AppError from '../utils/appError.js';

export const checkTeacherOwnThisCourse = catchAsync(async (req, res, next) => {
  if (req.user.role == 'teacher') {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return next(new AppError('No document found with that ID', 403));
    }

    if (course.teacher.toString() !== req.user.id) {
      return next(
        new AppError(
          "You do not have permission to perform this action because you don't own this course.",
          404
        )
      );
    }
  }
  return next();
});

export const getTeacherId = (req, res, next) => {
  req.body.teacher = req.user.id;
  return next();
};

export const cleanCourseObject = cleanObject(
  'name',
  'description',
  'startDate',
  'endDate',
  'memberLimit'
);
