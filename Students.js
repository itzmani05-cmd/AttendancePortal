const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  student_rollno: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  section: {
    type: String,
    enum: ['A', 'B'],
    default: 'A'
  },
  join_type: {
    type: String,
    enum: ['Regular', 'Lateral', 'Transfer'],
    default: 'Regular'
  },
  join_date: {
    type: Date,
    required: true
  },
  dob: {
    type: Date
  },
  subjects: [
    {
      type: String, 
    }
  ]
}, { timestamps: true });

StudentSchema.index({ 
    department: 1, 
    section: 1 
});

module.exports = mongoose.model('Student', StudentSchema);
