import {
  getAll,
  deleteOne,
  updateOne,
  createOne,
  getOne,
} from './handlerFactory.js';
import Topic from '../models/topicModel.js';

export const getAllTopics = getAll(Topic);

export const getTopic = getOne(Topic);

export const createTopic = createOne(Topic);

export const updateTopic = updateOne(Topic);

export const deleteTopic = deleteOne(Topic);
