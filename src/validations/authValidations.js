import {
  checkName,
  checkPassword,
  checkConfirmPassword,
  checkEmail,
  checkPhone,
  checkGender,
  checkRole,
} from './userValidationFactory.js';

export const validateSigningUp = () => [
  checkEmail(),
  checkName(),
  checkPhone(),
  checkGender(),
  checkRole(),
  checkPassword(),
  checkConfirmPassword(),
];

export const validateLoggingIn = () => [checkEmail(), checkPassword()];

export const validateForgettingPassword = () => checkEmail();

export const validateResettingPassword = () => [
  checkPassword(),
  checkConfirmPassword(),
];
