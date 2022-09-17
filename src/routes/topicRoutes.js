import express from 'express';
import {
  getAllTopics,
  createTopic,
  updateTopic,
  deleteTopic,
  getTopic,
} from '../controllers/topicController.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import {
  checkTeacherOwnTopic,
  cleanCreatedTopicObject,
  cleanUpdatedTopicObject,
  getTeacherIdForTopic,
  deleteRelatedLessons,
} from '../middlewares/topicMiddlewares.js';
import validate from '../middlewares/validate.js';
import {
  validateCreatingTopic,
  validateUpdatingTopic,
} from '../validations/topicValidations.js';

const router = express.Router();

router.get('/', getAllTopics);

router.get('/:id', getTopic);

router.use(protect, restrictTo('teacher'));

router.post(
  '/',
  cleanCreatedTopicObject,
  validate(validateCreatingTopic),
  getTeacherIdForTopic,
  createTopic
);

router.use(checkTeacherOwnTopic);

router.patch(
  '/:id',
  cleanUpdatedTopicObject,
  validate(validateUpdatingTopic),
  updateTopic
);

router.delete('/:id', deleteRelatedLessons, deleteTopic);

export default router;
