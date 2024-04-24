const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

exports.generateToken = (payload) => {
  // ... (generateToken code from previous example)
};

exports.generateToken = (payload) => {
  const { tenantId, role } = payload;
  return jwt.sign({ tenantId, role }, JWT_SECRET, { expiresIn: '1d' });
};