import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    teacher: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

topicSchema.virtual('lessons', {
  ref: 'Lesson',
  localField: '_id',
  foreignField: 'topic',
});

topicSchema.pre(/^find/, function (next) {
  console.log('abc');
  this.populate({ path: 'lessons', select: 'title index url -topic' });
  next();
});

const Topic = mongoose.model('Topic', topicSchema);

export default Topic;
