const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  course_code: {
    type: String,
    required: true,
    unique: true
  },
  course_name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  section: {
    type: String,
    default: "none"
  },
  faculty_id: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    default: 3
  },
  type: {
    type: String,
    enum: ['theory', 'lab', 'elective'],
    default: 'theory'
  }
}, { timestamps: true });

CourseSchema.index({ 
    department: 1, 
    semester: 1 
});

module.exports = mongoose.model('Course', CourseSchema);
