import { Discussion } from '../../models/discussionModels/index.js';
import {
  checkString,
  checkId,
  checkOptionalString,
} from '../validationFactory.js';

export const validateCreatingAnswer = () => [
  checkId('discussion', Discussion),
  checkString('answer', 8),
];

export const validateUpdatingAnswer = () => [checkOptionalString('answer', 8)];
