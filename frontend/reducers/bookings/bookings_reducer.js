import {RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING, UPDATE_BOOKING} from '../../actions/booking_actions/booking_action';
import {RECEIVE_USER} from '../../actions/user_actions';
// import {RECEIVE_BOOKING} from '../../actions/booking_actions/booking_action'

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BOOKING:
            // let newState = Object.assign({}, state, { [action.booking.id]: action.booking });
            let newState = Object.assign({}, state, action.booking);
            return newState;
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case REMOVE_BOOKING:
            delete nextState[action.bookingId];
            return nextState;
        case UPDATE_BOOKING:
            debugger
            
        case RECEIVE_USER:
            return Object.assign({}, state, action.user.bookings);
        default:
            return state;
    }
}

export default bookingsReducer;
