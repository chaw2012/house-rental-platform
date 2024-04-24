import BookingForm from '../components/BookingForm';

const ListingDetails = ({ listing }) => {
  return (
    <div>
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
      {/* Render other listing details */}
      <BookingForm listing={listing} />
    </div>
  );
};

export default ListingDetails;