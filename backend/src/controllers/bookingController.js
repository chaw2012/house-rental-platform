const Booking = require('../models/booking.model');
const Listing = require('../models/listing.model');

exports.createBooking = async (req, res) => {
  const { tenantId, listingId, startDate, endDate } = req.body;

  try {
    const tenant = await Tenant.findById(tenantId);
    const listing = await Listing.findById(listingId);

    if (!tenant || !listing) {
      return res.status(404).json({ message: 'Tenant or listing not found' });
    }

    const newBooking = new Booking({
      tenant: tenantId,
      listing: listingId,
      startDate,
      endDate
    });

    await newBooking.save();

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookings = async (req, res) => {
  const { tenantId, listingId, status } = req.query;

  try {
    let query = Booking.find();

    if (tenantId) {
      query = query.where('tenant').equals(tenantId);
    }

    if (listingId) {
      query = query.where('listing').equals(listingId);
    }

    if (status) {
      query = query.where('status').equals(status);
    }

    const bookings = await query.exec();

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBookingStatus = async (req, res) => {
  const { bookingId, status } = req.body;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = status;
    booking.updatedAt = Date.now();

    await booking.save();

    res.json({ message: 'Booking status updated successfully', booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};