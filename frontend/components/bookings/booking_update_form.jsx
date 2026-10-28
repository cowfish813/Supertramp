import React from "react";
import BookingFormFields from "./booking_shared_form";


class BookingUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.booking.listing_id);
  }


  handleSubmit(fields) {
    const { booking, listings, patchBooking, closeModal, fxn } = this.props;
    const listing = listings[booking.listing_id];

    return patchBooking({
      ...fields,
      id: booking.id,
      user_id: booking.user_id,
      listing_name: listing.name
    })
      .then(() => closeModal())
      .then(() => fxn({ ...booking, ...fields}));
  }

  render() {
      const { booking, listings } = this.props;
      const listing = listings[this.props.booking.listing_id];

      if (!listing) return null;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const excludedDates = [{start: new Date("1968-01-01"), end: yesterday}];

      return (
      <BookingFormFields
        listing={listing}
        initialBooking={booking}
        excludedDates={excludedDates}
        submitLabel="Update Booking"
        dateLabel="Change Dates"
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default BookingUpdateForm;