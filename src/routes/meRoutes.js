import express from 'express';
import { protect } from '../middlewares/authMiddlewares.js';
import validate from '../middlewares/validate.js';
import {
  validateChangingPassword,
  validateUpdatingInfo,
} from '../validations/meValidations.js';
import {
  getUser,
  updateUser,
  changePassword,
} from '../controllers/userController.js';
import {
  cleanUpdatedInfoObject,
  getCurrentId,
} from '../middlewares/meMiddlewares.js';
import { handleUploadImage } from '../middlewares/handleUploadImage.js';

const router = express.Router();

router.use(protect);

router.get('/info', getCurrentId, getUser);

router.patch(
  '/info',
  cleanUpdatedInfoObject,
  validate(validateUpdatingInfo),
  getCurrentId,
  handleUploadImage('avatar', 'users'),
  updateUser
);

router.post(
  '/changePassword',
  validate(validateChangingPassword),
  changePassword
);

export default router;
