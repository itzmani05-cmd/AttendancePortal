const mongoose = require('mongoose');

const OnDutySchema = new mongoose.Schema({
  student_rollno: { type: String, required: true },
  date: { type: Date, required: true },
  period: { type: Number, required: true },
  subject_code: { type: String, required: true },
  event_name: String,
  letter_url: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  reviewed_by: String
}, { timestamps: true });

OnDutySchema.index({ student_rollno: 1, date: 1, period: 1 }, { unique: true });

module.exports = mongoose.model('OnDuty', OnDutySchema);
