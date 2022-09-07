import {
  checkEmail,
  checkName,
  checkPassword,
  checkRoleForAdmin,
  checkConfirmPassword,
  checkOptionalEmail,
  checkOptionalName,
  checkOptionalPhone,
  checkOptionalGender,
  checkOptionalPassword,
  checkOptionalRoleForAdmin,
} from './userValidationFactory.js';

export const validateCreatingUser = () => [
  checkEmail(),
  checkName(),
  checkRoleForAdmin(),
  checkPassword(),
  checkConfirmPassword(),
];

export const validateUpdatingUser = () => [
  checkOptionalEmail(),
  checkOptionalName(),
  checkOptionalPhone(),
  checkOptionalGender(),
  checkOptionalRoleForAdmin(),
  checkOptionalPassword(),
  checkConfirmPassword(),
];
