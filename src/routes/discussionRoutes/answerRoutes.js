import express from 'express';
import {
  getAllAnswers,
  getAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} from '../../controllers/discussionControllers/index.js';
import { protect, restrictTo } from '../../middlewares/authMiddlewares.js';
import validate from '../../middlewares/validate.js';
import {
  cleanCreatedAnswerObject,
  cleanUpdatedAnswerObject,
  getCourseIdFromDiscussion,
  getUserId,
  checkUserOwnAnswer,
  checkUserCanJoinDiscussion,
} from '../../middlewares/discussionMiddlewares/index.js';
import {
  validateCreatingAnswer,
  validateUpdatingAnswer,
} from '../../validations/discussionValidations/index.js';

const router = express.Router();

router.use(protect, restrictTo('teacher', 'student'));

router.get('/', getAllAnswers);

router.get('/:id', getAnswer);

router.post(
  '/',
  cleanCreatedAnswerObject,
  validate(validateCreatingAnswer),
  getCourseIdFromDiscussion,
  checkUserCanJoinDiscussion,
  getUserId,
  createAnswer
);

router.use(checkUserOwnAnswer);

router.patch(
  '/:id',
  cleanUpdatedAnswerObject,
  validate(validateUpdatingAnswer),
  getUserId,
  updateAnswer
);

router.delete('/:id', deleteAnswer);

export default router;
