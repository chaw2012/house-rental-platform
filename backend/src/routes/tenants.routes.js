const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const tenantController = require('../controllers/tenants.controller');

const router = express.Router();

router.post('/register', tenantController.registerTenant);
// Protected routes
router.get('/profile', authMiddleware.verifyToken, tenantController.getTenantProfile);


const vettingController = require('../controllers/vettingController');

router.post('/vetting', authMiddleware.verifyToken, authMiddleware.isAdmin, vettingController.vettingTenant);

module.exports = router;