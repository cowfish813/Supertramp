import BookingUpdateForm from './booking_update_form'
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions/modal_actions";
import { patchBooking } from "../../actions/booking_actions/booking_action";
import { withRouter } from "react-router-dom";


const mstp = (state, ownProps) => {
  debugger
  return ({
    currentUser: state.entities.users[state.session.currentUser],
    booking: state.entities.bookings[ownProps.match.params.bookingId],
    list: state.entities.listings[]
  });
};

const mdtp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  patchBooking: (booking) => dispatch(patchBooking(booking))
});

export default withRouter(connect(mstp, mdtp)(BookingUpdateForm));
