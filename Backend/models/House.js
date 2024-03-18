const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new mongoose.Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'HomeOwner',
  },
  address: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  squareFootage: Number,
  numBedrooms: {
    type: Number,
    required: true
  },
  numBathrooms: {
    type: Number,
    required: true
  },
  yearBuilt: Number,
  imageUrl: String,
  availability: {
    type: String,
    required: true,
    enum: ['available', 'sold', 'off the market']
  },
  category: {
    type: String,
    required: true,
    enum: ['single family home', 'townhouse', 'condo', 'rental']
  },
  pincode: {
    type: String, 
    required: true,
  },
},{ timestamps: true });

module.exports = mongoose.model('House', houseSchema);
