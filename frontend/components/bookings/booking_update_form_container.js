import BookingUpdateForm from './booking_update_form'
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions/modal_actions";
import { patchBooking } from "../../actions/booking_actions/booking_action";
import { withRouter } from "react-router-dom";


const mstp = (state, ownProps) => {
  return ({
    // currentUser: state.entities.users[state.session.currentUser],
    listings: state.entities.listings,
    bookings: state.entities.bookings,
  });
}

const mdtp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  patchBooking: (booking) => dispatch(patchBooking(booking))
});

export default withRouter(connect(mstp, mdtp)(BookingUpdateForm));
