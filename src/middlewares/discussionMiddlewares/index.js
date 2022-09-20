import Course from '../../models/courseModel.js';
import catchAsync from '../../utils/catchAsync.js';
import AppError from '../../utils/appError.js';

export * from './answerMiddlewares.js';
export * from './commentMiddlewares.js';
export * from './discussionMiddlewares.js';

export const getUserId = (req, res, next) => {
  req.body.user = req.user.id;
  return next();
};

export const checkUserCanJoinDiscussion = catchAsync(async (req, res, next) => {
  const course = await Course.findById(req.body.course).populate({
    path: 'members',
  });
  if (!course) {
    return next(new AppError('No course found with that ID', 404));
  }

  if (
    req.user.id !== course.teacher &&
    !course.members.some((obj) => obj.id.toString() === req.user.id)
  ) {
    return next(
      new AppError(
        "You do not have permission to perform this action because you don't belong to this course",
        403
      )
    );
  }

  return next();
});
