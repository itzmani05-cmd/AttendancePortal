const CourseEndSurveyResponseSchema = new mongoose.Schema({
  survey_form_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseEndSurvey',
    required: true
  },
  student_rollno: {
    type: String,
    required: true,
    ref: 'Student'
  },
  submitted_on: {
    type: Date,
    default: Date.now
  }
});

// prevent same student from submitting twice
CourseEndSurveyResponseSchema.index({ survey_form_id: 1, student_rollno: 1 }, { unique: true });

module.exports = mongoose.model('CourseEndSurveyResponse', CourseEndSurveyResponseSchema);
