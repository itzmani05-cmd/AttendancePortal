const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  faculty_id: {
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
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: Number,
    unique: true,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  subjects_handled: [
    {
      type: String 
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Faculty', FacultySchema);
