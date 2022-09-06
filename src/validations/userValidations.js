import {
  checkPhone,
  checkEmail,
  checkName,
  checkGender,
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
  checkPhone(),
  checkGender(),
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
