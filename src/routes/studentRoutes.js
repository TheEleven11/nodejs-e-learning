import express from 'express';
import { getRegisteredCourses } from '../controllers/courseControlller.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.use(protect, restrictTo('student'));

router.get('/registered-courses', getRegisteredCourses);

export default router;
