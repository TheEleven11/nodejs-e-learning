import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    topic: {
      type: mongoose.Schema.ObjectId,
      ref: 'Topic',
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    teacher: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Lesson = mongoose.model('Lesson', lessonSchema);

export default Lesson;
