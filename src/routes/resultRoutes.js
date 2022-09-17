import express from 'express';
import { createResult, deleteResult } from '../controllers/resultController.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import {
  cleanResultObject,
  getStudentId,
  checkStudentOwnResult,
  checkRegistered,
} from '../middlewares/resultMiddlewares.js';
import validate from '../middlewares/validate.js';
import { validateCreatingResult } from '../validations/resultValidation.js';

const router = express.Router();

router.use(protect, restrictTo('student'));

router.post(
  '/',
  cleanResultObject,
  validate(validateCreatingResult),
  checkRegistered,
  getStudentId,
  createResult
);

router.delete('/:id', checkStudentOwnResult, deleteResult);

export default router;
