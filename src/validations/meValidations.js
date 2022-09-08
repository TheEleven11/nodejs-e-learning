import { check } from 'express-validator';
import User from '../models/userModel.js';
import {
  checkString,
  checkOptionalString,
  checkOptionalEnum,
} from './validationFactory.js';

const genders = ['male', 'female', 'other'];

const checkOptionalPhone = () =>
  check('phone')
    .optional()
    .isMobilePhone('vi-VN')
    .withMessage('Phone number is invalid.')
    .bail()
    .custom((value) => {
      User.exists({ phone: value }).then((user) => {
        if (user) return Promise.reject();
      });
    })
    .withMessage(
      'Phone number already in use. Please provide another or let this field empty.'
    );

const checkConfirmPassword = () => async (req, res, next) => {
  const { password, confirmPassword } = req.body;
  if (password) {
    await check('confirmPassword')
      .exists()
      .withMessage('Confirm password is required.')
      .bail()
      .isLength({ min: 6 })
      .withMessage('Confirm password must be at least 6 chars long.')
      .bail()
      .custom((value) => password === confirmPassword)
      .withMessage('Passwords do not match.')
      .run(req);
  }
  return next();
};

const checkDifferentPassword = () => async (req, res, next) => {
  const { password, currentPassword } = req.body;
  await checkPassword()
    .bail()
    .custom((value) => currentPassword !== password)
    .withMessage('New password must be different from current password.')
    .run(req);
  return next();
};

export const validateChangingPassword = () => [
  checkString('currentPassword', 6),
  checkDifferentPassword(),
  checkConfirmPassword(),
];

export const validateUpdatingInfo = () => [
  checkOptionalString('name'),
  checkOptionalPhone(),
  checkOptionalEnum('gender', genders),
];
