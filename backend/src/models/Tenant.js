const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({

  vettingStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  vettingDocuments: [
    {
      type: {
        type: String,
        enum: ['govtID', 'workEmail', 'payslip'],
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('Tenant', tenantSchema);