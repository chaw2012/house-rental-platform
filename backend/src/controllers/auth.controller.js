const bcrypt = require('bcryptjs');
const Tenant = require('../models/tenant.model');
const authUtils = require('../utils/auth.utils');

exports.registerTenant = async (req, res) => {
  const { name, email, phone, password, employmentInfo, identityDocuments } = req.body;

  try {
    // Check if email already exists
    const existingTenant = await Tenant.findOne({ email });
    if (existingTenant) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new tenant
    const newTenant = new Tenant({
      name,
      email,
      phone,
      password: hashedPassword,
      employmentInfo,
      identityDocuments
    });

    // Save tenant to database
    await newTenant.save();

    // Generate JWT token
    const token = authUtils.generateToken({ tenantId: newTenant._id, role: 'tenant' });

    res.status(201).json({ message: 'Tenant registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.loginTenant = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find tenant by email
    const tenant = await Tenant.findOne({ email });
    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, tenant.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = authUtils.generateToken({ tenantId: tenant._id, role: 'tenant' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};