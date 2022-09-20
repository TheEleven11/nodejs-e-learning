import { Answer } from '../../models/discussionModels/index.js';
import {
  checkString,
  checkId,
  checkOptionalString,
} from '../validationFactory.js';

export const validateCreatingComment = () => [
  checkId('answer', Answer),
  checkString('comment', 8),
];

export const validateUpdatingComment = () => [
  checkOptionalString('comment', 8),
];
