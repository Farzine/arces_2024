const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  payment_status: {
    type: Boolean,
    required: true,
    default: false,
  },
  val_id: {
    type: String
  },
});

const Attendee = mongoose.model("Attendee", attendeeSchema);
module.exports = Attendee;
