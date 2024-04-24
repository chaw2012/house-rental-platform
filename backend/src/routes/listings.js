const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');
const upload = require('../utils/multer');

router.post('/', upload.array('photos', 5), listingController.createListing);

const listingController = require('../controllers/listingController');

router.post('/', authMiddleware.verifyToken, listingController.createListing);
router.get('/', listingController.getListings);

module.exports = router;