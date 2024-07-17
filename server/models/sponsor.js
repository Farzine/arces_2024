const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
  sponsorName: {
    type: String,
    required: true,
  },
  sponsorType: {
    type: String,
    required: true,
  }
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

module.exports = Sponsor;
