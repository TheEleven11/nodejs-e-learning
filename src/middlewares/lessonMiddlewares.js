import cleanObject from '../utils/cleanObject.js';
import catchAsync from '../utils/catchAsync.js';
import Topic from '../models/topicModel.js';
import Lesson from '../models/LessonModel.js';
import { checkOwnedUser } from './middlewareFactory.js';

export const getTeacherIdForLesson = catchAsync(async (req, res, next) => {
  const topic = await Topic.findById(req.body.topic);
  req.body.teacher = topic.teacher;
  return next();
});

export const checkTeacherOwnLesson = checkOwnedUser(Lesson, 'teacher');

export const cleanCreatedLessonObject = cleanObject(
  'title',
  'topic',
  'index',
  'url'
);

export const cleanUpdatedLessonObject = cleanObject('title', 'index', 'url');
