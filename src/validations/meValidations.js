import {
  checkConfirmPassword,
  checkOptionalName,
  checkOptionalPhone,
  checkCurrentPassword,
  checkDifferentPassword,
  checkOptionalGender,
} from './userValidationFactory.js';

export const validateChangingPassword = () => [
  checkCurrentPassword(),
  checkDifferentPassword(),
  checkConfirmPassword(),
];

export const validateUpdatingInfo = () => [
  checkOptionalName(),
  checkOptionalPhone(),
  checkOptionalGender(),
];
