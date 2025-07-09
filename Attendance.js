const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  marked_by: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['regular', 'lateral', 'transfer'],
    required: true
  },
  attendance: [
    {
      period: { type: Number, required: true },
      subject_code: { type: String, required: true },
      status: {
        type: String,
        enum: ['present', 'absent', 'od'], 
        required: true
      }
    }
  ]
}, { timestamps: true });


AttendanceSchema.index({
  date: 1,
  "attendance.subject_code": 1,
  "attendance.period": 1
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
