import cleanObject from '../utils/cleanObject.js';
import {
  checkOwnedTeacher,
  deleteRelatedDocuments,
} from './middlewareFactory.js';
import Course from '../models/courseModel.js';
import Topic from '../models/topicModel.js';

export const getTeacherIdForCourse = (req, res, next) => {
  req.body.teacher = req.user.id;
  return next();
};

export const checkTeacherOwnCourse = checkOwnedTeacher(Course);

export const deleteRelatedTopics = deleteRelatedDocuments(Topic, 'course');

export const cleanCourseObject = cleanObject(
  'name',
  'description',
  'startDate',
  'endDate',
  'memberLimit'
);
