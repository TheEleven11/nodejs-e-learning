import {
  getAll,
  deleteOne,
  updateOne,
  createOne,
  getOne,
} from './handlerFactory.js';
import Lesson from '../models/LessonModel.js';

export const getAllLessons = getAll(Lesson);

export const getLesson = getOne(Lesson);

export const createLesson = createOne(Lesson);

export const updateLesson = updateOne(Lesson);

export const deleteLesson = deleteOne(Lesson);
