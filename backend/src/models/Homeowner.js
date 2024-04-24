const mongoose = require('mongoose');

const homeownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
});

const Homeowner = mongoose.model('Homeowner', homeownerSchema);

module.exports = Homeowner;