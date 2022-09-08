import {
  checkString,
  checkOptionalString,
  checkDate,
  checkOptionalDate,
  checkInt,
  checkOptionalInt,
} from './validationFactory.js';

export const validateCreatingCourse = () => [
  checkString('name', 8),
  checkString('description', 8),
  checkDate('startDate'),
  checkDate('endDate'),
  checkInt('memberLimit'),
];

export const validateUpdatingCourse = () => [
  checkOptionalString('name', 8),
  checkOptionalString('description', 8),
  checkOptionalDate('startDate'),
  checkOptionalDate('endDate'),
  checkOptionalInt('memberLimit'),
];
