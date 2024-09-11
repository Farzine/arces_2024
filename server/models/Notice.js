const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  title: {
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
}, { timestamps: true });

module.exports = mongoose.model('Notice', NoticeSchema);
