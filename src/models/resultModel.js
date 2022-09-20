import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
      required: true,
    },
    student: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

resultSchema.pre(/^find/, function (next) {
  this.populate({ path: 'student', select: 'name email' });
  this.populate({ path: 'course', select: '' });
  next();
});

const Result = mongoose.model('Result', resultSchema);

export default Result;
