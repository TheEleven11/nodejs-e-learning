import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    answer: {
      type: mongoose.Schema.ObjectId,
      ref: 'Answer',
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
