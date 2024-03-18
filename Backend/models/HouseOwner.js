const mongoose = require('mongoose');

const homeOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  }
},{ timestamps: true });

module.exports = mongoose.model('HomeOwner', homeOwnerSchema);
