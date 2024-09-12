const mongoose = require('mongoose');

const ImportantDateSchema = new mongoose.Schema({
  date: {
    type: String,  
    required: true
  },
  description: {
    type: String,
    required: true
  },
  show:
  {
    type:Boolean,
    default:false,
    required: true,
  }
}, { timestamps: true});

module.exports = mongoose.model('ImportantDate', ImportantDateSchema);
