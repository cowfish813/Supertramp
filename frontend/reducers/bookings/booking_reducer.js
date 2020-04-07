import {RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKING_ERRORS} from '../../actions/booking_actions/booking_action';
import {RECEIVE_USER} from '../../actions/user_actions';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING: 
            return Object.assign({}, state, {[action.booking.id]: action.booking});
        case REMOVE_BOOKING:
            delete nextState[action.bookingId]
            return nextState;
        case RECEIVE_USER:
            return Object.assign({}, state, action.user.bookings)
        default:
            return state;
    }
}

export default bookingsReducer;