const authUtils = require('../utils/auth.utils');

exports.verifyToken = (req, res, next) => {
  // ... (verifyToken code from previous example)
};


exports.isAdmin = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  next();
};