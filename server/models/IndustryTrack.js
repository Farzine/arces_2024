const mongoose = require('mongoose');

const IndustryTrackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  topics: [
    {
      type: String,
      required: true
    }
  ]
});

module.exports = mongoose.model('IndustryTrack', IndustryTrackSchema);
