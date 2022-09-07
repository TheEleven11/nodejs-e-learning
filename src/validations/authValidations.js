import {
  checkName,
  checkPassword,
  checkConfirmPassword,
  checkEmail,
  checkRole,
} from './userValidationFactory.js';

export const validateSigningUp = () => [
  checkEmail(),
  checkName(),
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
