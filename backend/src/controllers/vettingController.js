const Tenant = require('../models/tenant.model');

exports.vettingTenant = async (req, res) => {
  const { tenantId, vettingStatus, vettingDocuments } = req.body;

  try {
    const tenant = await Tenant.findById(tenantId);

    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }

    // Update vetting status and documents
    tenant.vettingStatus = vettingStatus;
    tenant.vettingDocuments = vettingDocuments;

    await tenant.save();

    res.json({ message: 'Tenant vetting updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};