import BookingUpdateForm from './booking_update_form'
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions/modal_actions";
import { patchBooking } from "../../actions/booking_actions/booking_action";
import { fetchListing } from "../../actions/listing_actions/listing_actions";


const mstp = (state, ownProps) => {
  return ({
    listings: state.entities.listings,
    bookings: state.entities.bookings,
  });
}

const mdtp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  patchBooking: (booking) => dispatch(patchBooking(booking)),
  fetchListing: (listing) => dispatch(fetchListing(listing))
});

export default connect(mstp, mdtp)(BookingUpdateForm);
