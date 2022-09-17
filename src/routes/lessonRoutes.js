import express from 'express';
import {
  getAllLessons,
  getLesson,
  createLesson,
  updateLesson,
  deleteLesson,
} from '../controllers/lessonController.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import {
  checkTeacherOwnLesson,
  cleanCreatedLessonObject,
  cleanUpdatedLessonObject,
  getTeacherIdForLesson,
} from '../middlewares/lessonMiddlewares.js';
import validate from '../middlewares/validate.js';
import {
  validateCreatingLesson,
  validateUpdatingLesson,
} from '../validations/lessonValidations.js';

const router = express.Router();

router.get('/', getAllLessons);

router.get('/:id', getLesson);

router.use(protect, restrictTo('teacher'));

router.post(
  '/',
  cleanCreatedLessonObject,
  validate(validateCreatingLesson),
  getTeacherIdForLesson,
  createLesson
);

router.use(checkTeacherOwnLesson);

router.patch(
  '/:id',
  cleanUpdatedLessonObject,
  validate(validateUpdatingLesson),
  updateLesson
);

router.delete('/:id', deleteLesson);

export default router;
