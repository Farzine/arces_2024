const mongoose = require('mongoose');

const ResearchTrackSchema = new mongoose.Schema({
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

module.exports = mongoose.model('ResearchTrack', ResearchTrackSchema);
