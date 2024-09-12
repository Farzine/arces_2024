const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
  messages: {
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

module.exports = mongoose.model('Messages', MessagesSchema);