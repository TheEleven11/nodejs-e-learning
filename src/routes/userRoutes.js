import express from 'express';
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import validate from '../middlewares/validate.js';
import { handleUploadImage } from '../middlewares/handleUploadImage.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import {
  checkCurrentAdmin,
  cleanCreatedUserObject,
  cleanUpdatedUserObject,
} from '../middlewares/userMiddlewares.js';
import {
  validateCreatingUser,
  validateUpdatingUser,
} from '../validations/userValidations.js';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUser);

router.use(protect, restrictTo('admin'));

router.post(
  '/',
  cleanCreatedUserObject,
  validate(validateCreatingUser),
  createUser
);

router.patch(
  '/:id',
  checkCurrentAdmin,
  cleanUpdatedUserObject,
  validate(validateUpdatingUser),
  handleUploadImage('avatar', 'users'),
  updateUser
);

router.delete('/:id', checkCurrentAdmin, deleteUser);

export default router;
