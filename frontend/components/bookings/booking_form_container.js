import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions/modal_actions';
import { createBooking, receiveBookingErrors } from '../../actions/booking_actions/booking_action';

const mstp = (state, ownProps) => {
    return ({
      currentUser: state.entities.users[state.session.currentUser],
      errors: state.errors.bookings
    });
};

const mdtp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  createBooking: booking => dispatch(createBooking(booking)),
  removeBookingErrors: (empty) => dispatch(receiveBookingErrors(empty))
});

export default connect(mstp, mdtp)(BookingForm);