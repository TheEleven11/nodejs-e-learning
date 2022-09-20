import mongoose from 'mongoose';

const discussionSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

discussionSchema.virtual('answers', {
  ref: 'Answer',
  localField: '_id',
  foreignField: 'discussion',
});

discussionSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'answers',
    select: 'answer user comments -discussion',
  });
  next();
});

const Discussion = mongoose.model('Discussion', discussionSchema);

export default Discussion;
