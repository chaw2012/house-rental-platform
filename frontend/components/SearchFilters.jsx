import { useState } from 'react';

const SearchFilters = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');

  const handleSearch = () => {
    const filters = {
      location,
      radius,
      bedrooms,
      bathrooms,
      minArea,
      maxArea,
      minRent,
      maxRent
    };
    onSearch(filters);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Location (latitude, longitude)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Radius (km)"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
      <input
        type="number"
        placeholder="Bedrooms"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
      />
      {/* Render other filter inputs */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilters;