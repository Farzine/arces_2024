const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  tag: {
    type: String,
    enum: ['conference', 'meeting', 'tour', 'programs'],
    required: true,
  },
  year: {
    type: Number,
    required: true,
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
