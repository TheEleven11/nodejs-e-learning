import { Discussion, Answer } from '../../models/discussionModels/index.js';
import cleanObject from '../../utils/cleanObject.js';
import catchAsync from '../../utils/catchAsync.js';
import { checkOwnedUser } from '../middlewareFactory.js';

export const getCourseIdFromDiscussion = catchAsync(async (req, res, next) => {
  const doc = await Discussion.findById(req.body.discussion);
  if (!doc) {
    return next(new AppError('No disscussion found with that ID', 404));
  }

  req.body.course = doc.course;

  return next();
});

export const checkUserOwnAnswer = checkOwnedUser(Answer, 'user');

export const cleanCreatedAnswerObject = cleanObject('discussion', 'answer');

export const cleanUpdatedAnswerObject = cleanObject('answer');
