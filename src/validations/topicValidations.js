import {
  checkInt,
  checkOptionalInt,
  checkString,
  checkOptionalString,
  checkId,
} from './validationFactory.js';
import Course from '../models/courseModel.js';

export const validateCreatingTopic = () => [
  checkString('title', 6),
  checkId('course', Course),
  checkInt('index'),
];

export const validateUpdatingTopic = () => [
  checkOptionalString('title', 6),
  checkOptionalInt('index'),
];
