const Tenant = require('../models/Tenant');

exports.registerTenant = async (req, res) => {
  // ... (registration code from previous example)
};

exports.getTenantProfile = async (req, res) => {
  try {
    const tenantId = req.user.tenantId;
    const tenant = await Tenant.findById(tenantId);

    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }

    res.json(tenant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};