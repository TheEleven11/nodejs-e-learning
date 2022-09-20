import Course from '../../models/courseModel.js';
import {
  checkString,
  checkId,
  checkOptionalString,
} from '../validationFactory.js';

export const validateCreatingDiscussion = () => [
  checkString('topic', 8),
  checkId('course', Course),
  checkString('detail', 8),
];

export const validateUpdatingDiscussion = () => [
  checkOptionalString('topic', 8),
  checkOptionalString('detail', 8),
];
