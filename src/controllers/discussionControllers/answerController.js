import {
  getAll,
  deleteOne,
  updateOne,
  createOne,
  getOne,
} from '../handlerFactory.js';
import { Answer } from '../../models/discussionModels/index.js';

export const getAllAnswers = getAll(Answer);

export const getAnswer = getOne(Answer);

export const createAnswer = createOne(Answer);

export const updateAnswer = updateOne(Answer);

export const deleteAnswer = deleteOne(Answer);
