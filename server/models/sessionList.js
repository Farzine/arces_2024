
const mongoose = require('mongoose');

const SessionListSchema = new mongoose.Schema({
  sessionTheme: {
    type: String,
    required: true,
  },
  venue: {
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

const SessionList = mongoose.model('SessionList', SessionListSchema);

module.exports = SessionList;
