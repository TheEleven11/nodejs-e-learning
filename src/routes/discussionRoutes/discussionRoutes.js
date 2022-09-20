import express from 'express';
import {
  getAllDiscussions,
  getDiscussion,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
} from '../../controllers/discussionControllers/index.js';
import { protect, restrictTo } from '../../middlewares/authMiddlewares.js';
import validate from '../../middlewares/validate.js';
import {
  checkUserCanJoinDiscussion,
  checkUserOwnDiscussion,
  cleanCreatedDiscussionObject,
  cleanUpdatedDiscussionObject,
  getUserId,
} from '../../middlewares/discussionMiddlewares/index.js';
import {
  validateCreatingDiscussion,
  validateUpdatingDiscussion,
} from '../../validations/discussionValidations/index.js';

const router = express.Router();

router.use(protect, restrictTo('teacher', 'student'));

router.get('/', getAllDiscussions);

router.get('/:id', getDiscussion);

router.post(
  '/',
  cleanCreatedDiscussionObject,
  validate(validateCreatingDiscussion),
  checkUserCanJoinDiscussion,
  getUserId,
  createDiscussion
);

router.use(checkUserOwnDiscussion);

router.patch(
  '/:id',
  cleanUpdatedDiscussionObject,
  validate(validateUpdatingDiscussion),
  getUserId,
  updateDiscussion
);

router.delete('/:id', deleteDiscussion);

export default router;
