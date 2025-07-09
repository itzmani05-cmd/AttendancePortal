const mongoose = require('mongoose');

const MedicalLeaveSchema = new mongoose.Schema({
  student_rollno: { type: String, required: true },
  subject_code: { type: String, required: true },
  date: { type: Date, required: true },
  period: { type: Number, required: true },
  reason: String,
  certificate_url: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  reviewed_by: String
}, { timestamps: true });

MedicalLeaveSchema.index({ 
    student_rollno: 1, 
    subject_code: 1, 
    date: 1, 
    period: 1 
}, { unique: true });

module.exports = mongoose.model('MedicalLeave', MedicalLeaveSchema);
