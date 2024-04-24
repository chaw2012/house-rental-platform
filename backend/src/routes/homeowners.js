const express = require('express');
const router = express.Router();
const homeownerController = require('../controllers/homeownerController');

router.post('/register', homeownerController.registerHomeowner);

module.exports = router;
