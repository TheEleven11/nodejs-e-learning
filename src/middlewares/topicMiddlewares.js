import cleanObject from '../utils/cleanObject.js';
import catchAsync from '../utils/catchAsync.js';
import Course from '../models/courseModel.js';
import Topic from '../models/topicModel.js';
import Lesson from '../models/LessonModel.js';
import {
  checkOwnedTeacher,
  deleteRelatedDocuments,
} from './middlewareFactory.js';

export const getTeacherIdForTopic = catchAsync(async (req, res, next) => {
  const course = await Course.findById(req.body.course);
  req.body.teacher = course.teacher;
  return next();
});

export const checkTeacherOwnTopic = checkOwnedTeacher(Topic);

export const deleteRelatedLessons = deleteRelatedDocuments(Lesson, 'topic');

export const cleanCreatedTopicObject = cleanObject('title', 'course', 'index');

export const cleanUpdatedTopicObject = cleanObject('title', 'index');
