import {
  getAll,
  deleteOne,
  updateOne,
  createOne,
  getOne,
} from '../handlerFactory.js';
import { Discussion } from '../../models/discussionModels/index.js';

export const getAllDiscussions = getAll(Discussion);

export const getDiscussion = getOne(Discussion);

export const createDiscussion = createOne(Discussion);

export const updateDiscussion = updateOne(Discussion);

export const deleteDiscussion = deleteOne(Discussion);
