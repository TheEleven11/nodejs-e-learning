import lodash from 'lodash';
import { check } from 'express-validator';

export const checkString = (field, minLength) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .isLength({ min: minLength })
    .withMessage(
      `${lodash.startCase(field)} must be at least ${minLength} chars long.`
    );

export const checkOptionalString = (field, minLength) =>
  check(field)
    .optional()
    .isLength({ min: minLength })
    .withMessage(
      `${lodash.startCase(field)} must be at least ${minLength} chars long.`
    );

export const checkDate = (field) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .isISO8601()
    .toDate()
    .withMessage(`${lodash.startCase(field)} is invalid.`);

export const checkOptionalDate = (field) =>
  check(field)
    .optional()
    .isISO8601()
    .toDate()
    .withMessage(`${lodash.startCase(field)} is invalid.`);

export const checkEnum = (field, array) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .custom((value) => array.includes(value))
    .withMessage(`${lodash.startCase(field)} is invalid.`);

export const checkOptionalEnum = (field, array) =>
  check(field)
    .custom((value) => array.includes(value))
    .withMessage(`${lodash.startCase(field)} is invalid.`);

export const checkId = (field) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} Id is required.`)
    .bail()
    .isMongoId()
    .withMessage(`${lodash.startCase(field)} Id is invalid.`);

export const checkOptionalId = (field) =>
  check(field)
    .optional()
    .isMongoId()
    .withMessage(`${lodash.startCase(field)} Id is invalid.`);

export const checkInt = (field) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .isInt({ min: 0 })
    .withMessage(`${lodash.startCase(field)} must be a integer.`);

export const checkOptionalInt = (field) =>
  check(field)
    .optional()
    .isInt({ min: 0 })
    .withMessage(`${lodash.startCase(field)} must be a integer.`);
