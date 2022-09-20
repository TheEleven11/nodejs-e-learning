import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema(
  {
    discussion: {
      type: mongoose.Schema.ObjectId,
      ref: 'Discussion',
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

answerSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'answer',
});

answerSchema.pre(/^find/, function (next) {
  this.populate({ path: 'comments', select: 'comment user -answer' });
  next();
});

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;
