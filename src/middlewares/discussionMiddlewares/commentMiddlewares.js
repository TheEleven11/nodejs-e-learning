import { Answer, Comment } from '../../models/discussionModels/index.js';
import cleanObject from '../../utils/cleanObject.js';
import catchAsync from '../../utils/catchAsync.js';
import { checkOwnedUser } from '../middlewareFactory.js';

export const getCourseIdFromAnswer = catchAsync(async (req, res, next) => {
  const doc = await Answer.findById(req.body.answer);
  if (!doc) {
    return next(new AppError('No disscussion found with that ID', 404));
  }

  req.body.course = doc.course;

  return next();
});

export const checkUserOwnComment = checkOwnedUser(Comment, 'user');

export const cleanCreatedCommentObject = cleanObject('answer', 'comment');

export const cleanUpdatedCommentObject = cleanObject('comment');
