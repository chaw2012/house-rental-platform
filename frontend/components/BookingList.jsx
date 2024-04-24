import { useState, useEffect } from 'react';
import axios from '../api/axios';

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const tenantId = localStorage.getItem('tenantId');
        const response = await axios.get(`/bookings?tenantId=${tenantId}`);
        setBookings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, []);

  const handleStatusUpdate = async (bookingId, status) => {
    try {
      await axios.put(`/bookings/${bookingId}`, { status });
      // Update the bookings list after successful status update
      const updatedBookings = bookings.map((booking) => {
        if (booking._id === bookingId) {
          return { ...booking, status };
        }
        return booking;
      });
      setBookings(updatedBookings);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <h3>{booking.listing.title}</h3>
            <p>Start Date: {new Date(booking.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(booking.endDate).toLocaleDateString()}</p>
            <p>Status: {booking.status}</p>
            {booking.status === 'pending' && (
              <div>
                <button onClick={() => handleStatusUpdate(booking._id, 'confirmed')}>Confirm</button>
                <button onClick={() => handleStatusUpdate(booking._id, 'canceled')}>Cancel</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )};