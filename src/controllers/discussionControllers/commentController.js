import {
  getAll,
  deleteOne,
  updateOne,
  createOne,
  getOne,
} from '../handlerFactory.js';
import { Comment } from '../../models/discussionModels/index.js';

export const getAllComments = getAll(Comment);

export const getComment = getOne(Comment);

export const createComment = createOne(Comment);

export const updateComment = updateOne(Comment);

export const deleteComment = deleteOne(Comment);
