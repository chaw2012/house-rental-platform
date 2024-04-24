const Listing = require('../models/Listing');

exports.createListing = async (req, res) => {
  try {
    const { address, rooms, amenities } = req.body;
    const photos = req.files.map((file) => file.path);

    // Create a new listing
    const newListing = new Listing({
      address,
      rooms,
      amenities,
      photos,
      homeowner: req.user._id, // Assuming authenticated homeowner
    });

    // Save the listing to the database
    await newListing.save();

    res.status(201).json({ message: 'Listing created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create listing' });
  }
};

const Listing = require('../models/listing.model');

exports.createListing = async (req, res) => {
  // ... (create listing logic)
};

exports.getListings = async (req, res) => {
  const { location, radius, bedrooms, bathrooms, minArea, maxArea, minRent, maxRent } = req.query;

  try {
    let query = Listing.find();

    // Apply location filter
    if (location && radius) {
      const [longitude, latitude] = location.split(',').map(Number);
      const radius = parseFloat(radius);

      query = query.near({
        center: { coordinates: [longitude, latitude] },
        spherical: true,
        maxDistance: radius * 1000 // Convert radius to meters
      });
    }

    // Apply other filters
    if (bedrooms) {
      query = query.where('bedrooms').equals(bedrooms);
    }
    if (bathrooms) {
      query = query.where('bathrooms').equals(bathrooms);
    }
    if (minArea) {
      query = query.where('area').gte(minArea);
    }
    if (maxArea) {
      query = query.where('area').lte(maxArea);
    }
    if (minRent) {
      query = query.where('rent').gte(minRent);
    }
    if (maxRent) {
      query = query.where('rent').lte(maxRent);
    }

    const listings = await query.exec();

    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};