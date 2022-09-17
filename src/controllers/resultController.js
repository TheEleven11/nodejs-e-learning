import {
  getAll,
  deleteOne,
  updateOne,
  createOne,
  getOne,
} from './handlerFactory.js';
import Result from '../models/resultModel.js';

export const getAllResults = getAll(Result);

export const getResult = getOne(Result);

export const createResult = createOne(Result);

export const updateResult = updateOne(Result);

export const deleteResult = deleteOne(Result);
