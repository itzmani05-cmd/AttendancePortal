const mongoose = require('mongoose');

const FeedbackFormSchema = new mongoose.Schema({
  faculty_id: {
    type: String,
    required: true,
    ref: 'Faculty'
  },
  subject_code: {
    type: String,
    required: true,
    ref: 'Course'
  },
  title: {
    type: String,
    required: true
  },
  description: String,

  form_link: {
    type: String,
    required: true 
  },

  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },

  uploaded_on: {
    type: Date,
    default: Date.now
  }
});

FeedbackFormSchema.index({ 
  faculty_id: 1, 
  subject_code: 1 
});

module.exports = mongoose.model('FeedbackForm', FeedbackFormSchema);
