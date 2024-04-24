const Homeowner = require('../models/Homeowner');
const bcrypt = require('bcryptjs');

exports.registerHomeowner = async (req, res) => {
  try {
    const { name, email, phone, address, password } = req.body;

    // Check if homeowner already exists
    const existingHomeowner = await Homeowner.findOne({ email });
    if (existingHomeowner) {
      return res.status(400).json({ error: 'Homeowner already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new homeowner
    const newHomeowner = new Homeowner({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    // Save the homeowner to the database
    await newHomeowner.save();

    res.status(201).json({ message: 'Homeowner registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register homeowner' });
  }
};