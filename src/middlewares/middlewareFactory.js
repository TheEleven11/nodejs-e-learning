import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const checkOwnedUser = (Model, field) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    if (doc[field].toString() !== req.user.id) {
      return next(
        new AppError(
          "You do not have permission to perform this action because you don't own this document.",
          403
        )
      );
    }
    return next();
  });

export const deleteRelatedDocuments = (Model, field) =>
  catchAsync(async (req, res, next) => {
    await Model.deleteMany({ [field]: req.params.id });
    return next();
  });
