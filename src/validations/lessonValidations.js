import {
  checkInt,
  checkOptionalInt,
  checkString,
  checkOptionalString,
  checkURL,
  checkOptionalURL,
  checkId,
} from './validationFactory.js';
import Topic from '../models/topicModel.js';

export const validateCreatingLesson = () => [
  checkString('title', 6),
  checkId('topic', Topic),
  checkInt('index'),
  checkURL('url'),
];

export const validateUpdatingLesson = () => [
  checkOptionalString('title', 6),
  checkOptionalInt('index'),
  checkOptionalURL('url'),
];
