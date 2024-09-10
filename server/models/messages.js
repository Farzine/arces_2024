const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
  messages: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Messages', MessagesSchema);