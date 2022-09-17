import express from 'express';
import adminRouter from './adminRoutes.js';
import authRouter from './authRoutes.js';
import meRouter from './meRoutes.js';
import courseRouter from './courseRoutes.js';
import topicRouter from './topicRoutes.js';
import lessonRouter from './lessonRoutes.js';

const api = express.Router();

api.use('/admin', adminRouter);

api.use('/auth', authRouter);

api.use('/me', meRouter);

api.use('/courses', courseRouter);

api.use('/topics', topicRouter);

api.use('/lessons', lessonRouter);

export default api;
