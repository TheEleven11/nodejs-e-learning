import express from 'express';
import { getMyCourses } from '../controllers/courseControlller.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.use(protect, restrictTo('teacher'));

router.get('/my-courses', getMyCourses);

export default router;
