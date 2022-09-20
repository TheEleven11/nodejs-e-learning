import express from 'express';
import {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} from '../../controllers/discussionControllers/index.js';
import { protect, restrictTo } from '../../middlewares/authMiddlewares.js';
import validate from '../../middlewares/validate.js';
import {
  cleanCreatedCommentObject,
  cleanUpdatedCommentObject,
  getCourseIdFromAnswer,
  getUserId,
  checkUserOwnComment,
  checkUserCanJoinDiscussion,
} from '../../middlewares/discussionMiddlewares/index.js';
import {
  validateCreatingComment,
  validateUpdatingComment,
} from '../../validations/discussionValidations/index.js';

const router = express.Router();

router.use(protect, restrictTo('teacher', 'student'));

router.get('/', getAllComments);

router.get('/:id', getComment);

router.post(
  '/',
  cleanCreatedCommentObject,
  validate(validateCreatingComment),
  getCourseIdFromAnswer,
  checkUserCanJoinDiscussion,
  getUserId,
  createComment
);

router.use(checkUserOwnComment);

router.patch(
  '/:id',
  cleanUpdatedCommentObject,
  validate(validateUpdatingComment),
  getUserId,
  updateComment
);

router.delete('/:id', deleteComment);

export default router;
