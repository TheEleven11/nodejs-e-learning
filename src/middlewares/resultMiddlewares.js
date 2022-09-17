import cleanObject from '../utils/cleanObject.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import { checkOwnedUser } from './middlewareFactory.js';
import Result from '../models/resultModel.js';

export const getStudentId = (req, res, next) => {
  req.body.student = req.user.id;
  return next();
};

export const checkRegistered = catchAsync(async (req, res, next) => {
  const result = await Result.find({ student: req.user.id });
  if (result) return next(new AppError('You registered this course.', 403));
  return next();
});

export const checkStudentOwnResult = checkOwnedUser(Result, 'student');

export const cleanResultObject = cleanObject('course');
