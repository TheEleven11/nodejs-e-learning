import express from 'express';
import userRouter from './userRoutes.js';
import authRouter from './authRoutes.js';
import meRouter from './meRoutes.js';
import courseRouter from './courseRoutes.js';
import topicRouter from './topicRoutes.js';
import lessonRouter from './lessonRoutes.js';
import resultRouter from './resultRoutes.js';
import studentRouter from './studentRoutes.js';
import teacherRouter from './teacherRoutes.js';
import {
  discussionRouter,
  answerRouter,
  commentRouter,
} from './discussionRoutes/index.js';

const api = express.Router();

api.use('/auth', authRouter);

api.use('/me', meRouter);

api.use('/student', studentRouter);

api.use('/teacher', teacherRouter);

api.use('/users', userRouter);

api.use('/results', resultRouter);

api.use('/courses', courseRouter);

api.use('/topics', topicRouter);

api.use('/lessons', lessonRouter);

api.use('/discussions', discussionRouter);

api.use('/answers', answerRouter);

api.use('/comments', commentRouter);

export default api;
