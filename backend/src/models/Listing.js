const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  address: { type: String, required: true },
  rooms: { type: Number, required: true },
  amenities: { type: String, required: true },
  photos: [{ type: String, required: true }],
  homeowner: { type: mongoose.Schema.Types.ObjectId, ref: 'Homeowner', required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true },
  rent: { type: Number, required: true },
  images: [String],
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
