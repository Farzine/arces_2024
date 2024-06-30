const mongoose = require('mongoose');

const ImportantDateSchema = new mongoose.Schema({
  date: {
    type: String,  
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ImportantDate', ImportantDateSchema);
