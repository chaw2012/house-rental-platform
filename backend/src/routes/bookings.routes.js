const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware.verifyToken, bookingController.createBooking);
router.get('/', authMiddleware.verifyToken, bookingController.getBookings);
router.put('/:id', authMiddleware.verifyToken, bookingController.updateBookingStatus);