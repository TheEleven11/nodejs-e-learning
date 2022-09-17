import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    teacher: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    memberLimit: {
      type: Number,
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

courseSchema.virtual('topics', {
  ref: 'Topic',
  localField: '_id',
  foreignField: 'course',
});

courseSchema.virtual('members', {
  ref: 'Result',
  localField: '_id',
  foreignField: 'course',
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
