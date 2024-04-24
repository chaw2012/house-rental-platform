import { useState } from 'react';
import axios from '../api/axios';

const BookingForm = ({ listing }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const tenantId = localStorage.getItem('tenantId');
      const response = await axios.post('/bookings', {
        tenantId,
        listingId: listing._id,
        startDate,
        endDate
      });

      console.log(response.data.message);
      // Handle successful booking
    } catch (error) {
      console.error(error);
      // Handle booking error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;