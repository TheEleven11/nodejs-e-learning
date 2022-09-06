import {
  checkConfirmPassword,
  checkOptionalEmail,
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
  checkOptionalEmail(),
  checkOptionalName(),
  checkOptionalPhone(),
  checkOptionalGender(),
];
