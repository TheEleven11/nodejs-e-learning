import {
  deleteOne,
  updateOne,
  getOne,
  getAll,
  createOne,
} from './handlerFactory.js';
import Course from '../models/courseModel.js';

export const getAllCourses = getAll(Course);

export const getCourse = getOne(Course);

export const createCourse = createOne(Course);

export const updateCourse = updateOne(Course);

export const deleteCourse = deleteOne(Course);
