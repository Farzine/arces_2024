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
    required: false  
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
