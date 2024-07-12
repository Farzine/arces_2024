const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  session: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false  
  },
  start_time: {
    type: String,
    required: false  
  },
  end_time: {
    type: String,
    required: false  
  }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;
