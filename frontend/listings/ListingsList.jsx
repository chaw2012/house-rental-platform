import { useState, useEffect } from 'react';
import axios from '../api/axios';
import SearchFilters from '../components/SearchFilters';

const ListingsList = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('/listings');
        setListings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchListings();
  }, []);

  const handleSearch = async (filters) => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await axios.get(`/listings?${queryParams}`);
      setListings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchFilters onSearch={handleSearch} />
      <ul>
        {listings.map((listing) => (
          <li key={listing._id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            {/* Render other listing details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingsList;