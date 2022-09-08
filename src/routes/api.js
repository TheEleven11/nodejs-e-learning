import express from 'express';
import userRouter from './userRoutes.js';
import authRouter from './authRoutes.js';
import meRouter from './meRoutes.js';
import courseRouter from './courseRoutes.js';

const api = express.Router();

api.use('/admin/users', userRouter);

api.use('/auth', authRouter);

api.use('/me', meRouter);

api.use('/courses', courseRouter);

export default api;
