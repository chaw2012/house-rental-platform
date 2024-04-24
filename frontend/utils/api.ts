import axios from 'axios';

interface HomeownerData {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}



export const registerHomeowner = async (data: HomeownerData) => {
  try {
    const response = await axios.post('/api/homeowners/register', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register homeowner');
  }
};

interface ListingData {
    address: string;
    rooms: number;
    amenities: string;
    photos: File[];
  }


export const createListing = async (data: ListingData) => {
  try {
    const formData = new FormData();
    formData.append('address', data.address);
    formData.append('rooms', data.rooms.toString());
    formData.append('amenities', data.amenities);
    data.photos.forEach((photo) => {
      formData.append('photos', photo);
    });

    const response = await axios.post('/api/listings', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create listing');
  }
};