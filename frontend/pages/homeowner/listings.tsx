import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createListing } from '../../utils/api';

const PropertyListing = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    address: '',
    rooms: 0,
    amenities: '',
    photos: [] as File[], // Specify the type of photos as an array of File objects
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesArray = Array.from(files) as File[]; // Convert FileList to array of File objects
      setFormData({ ...formData, photos: [...formData.photos, ...filesArray] });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createListing(formData);
      router.push('/homeowner/dashboard');
    } catch (err) {
      setError('Failed to create listing');
    }
  };

  return (
    <div>
      <h1>List Your Property</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rooms"
          placeholder="Number of Rooms"
          value={formData.rooms}
          onChange={handleChange}
          required
        />
        <textarea
          name="amenities"
          placeholder="Amenities"
          value={formData.amenities}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="photos"
          multiple
          onChange={handlePhotoUpload}
          required
        />
        <button type="submit">List Property</button>
      </form>
    </div>
  );
};

export default PropertyListing;
