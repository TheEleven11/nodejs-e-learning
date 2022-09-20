import {
  deleteOne,
  updateOne,
  getOne,
  getAll,
  createOne,
} from './handlerFactory.js';
import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllUsers = getAll(User);

export const getUser = getOne(User);

export const createUser = createOne(User);

export const updateUser = updateOne(User);

export const deleteUser = deleteOne(User);

export const changePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!(await user.comparePassword(req.body.currentPassword))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  user.password = req.body.password;
  await user.save();

  createSendToken(user, 200, req, res);
});
