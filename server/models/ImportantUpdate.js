
const mongoose = require('mongoose');

const ImportantUpdateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ImportantUpdate', ImportantUpdateSchema);