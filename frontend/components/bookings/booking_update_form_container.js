import BookingUpdateForm from './booking_update_form'
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions/modal_actions";
import { patchBooking } from "../../actions/booking_actions/booking_action";


const mstp = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.currentUser],
    booking: state.entities.bookings[ownProps.match.params.bookingId]
  });
};

const mdtp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  patchBooking: (booking) => dispatch(patchBooking(booking))
});

export default connect(mstp, mdtp)(BookingUpdateForm);
