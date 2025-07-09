const mongoose = require('mongoose');

const CourseEndSurveySchema = new mongoose.Schema({
  student_rollno: {
    type: String,
    required: true
  },
  subject_code: {
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

CourseEndSurveySchema.index(
  { 
    student_rollno: 1, 
    subject_code: 1 
  },
  { unique: true }
);

CourseEndSurveySchema.index({ 
    subject_code: 1 
});

module.exports = mongoose.model('CourseEndSurvey', CourseEndSurveySchema);
