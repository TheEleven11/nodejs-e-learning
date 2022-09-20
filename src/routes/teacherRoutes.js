import express from 'express';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.use(protect, restrictTo('teacher'));

export default router;
