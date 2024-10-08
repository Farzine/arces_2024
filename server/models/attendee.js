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
  category: {
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
  currency: {
    type: String,
    required: true,
  },
  regular_fee:{
    type: Number,
    required: true,
  },
  early_bird_fee:{
    type: Number,
    required: true,
  },
  payment_status: {
    type: Boolean,
    required: true,
    default: false,
  },
  val_id: {
    type: String
  }
});

const Attendee = mongoose.model("Attendee", attendeeSchema);
module.exports = Attendee;
