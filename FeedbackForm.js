const mongoose = require('mongoose');

const FeedbackFormSchema = new mongoose.Schema({
  studentRollno: {
    type: String,
    required: true
  },
  subject_code: {
    type: String,
    required: true
  },
  faculty_id: {
    type: String,
    required: true
  },
  response: {
    type: Object, 
    required: true
  },
  submitted_on: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

FeedbackFormSchema.index(
  { studentRollno: 1, subject_code: 1 },
  { unique: true }
);


FeedbackFormSchema.index(
  { faculty_id: 1, subject_code: 1 }
);

module.exports = mongoose.model('FeedbackForm', FeedbackFormSchema);
