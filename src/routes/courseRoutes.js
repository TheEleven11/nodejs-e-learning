import express from 'express';
import {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courseControlller.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import {
  cleanCourseObject,
  getTeacherId,
  checkTeacherOwnCourse,
  deleteRelatedTopics,
} from '../middlewares/courseMiddlewares.js';
import validate from '../middlewares/validate.js';
import {
  validateCreatingCourse,
  validateUpdatingCourse,
} from '../validations/courseValidations.js';

const router = express.Router();

router.get('/', getAllCourses);

router.get('/:id', getCourse);

router.use(protect, restrictTo('teacher'));

router.post(
  '/',
  cleanCourseObject,
  validate(validateCreatingCourse),
  getTeacherId,
  createCourse
);

router.use(checkTeacherOwnCourse);

router.patch(
  '/:id',
  cleanCourseObject,
  validate(validateUpdatingCourse),
  updateCourse
);

router.delete('/:id', deleteRelatedTopics, deleteCourse);

export default router;
