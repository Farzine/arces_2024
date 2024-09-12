
const mongoose = require('mongoose');

const ImportantUpdateSchema = new mongoose.Schema({
  title: {
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

module.exports = mongoose.model('ImportantUpdate', ImportantUpdateSchema);