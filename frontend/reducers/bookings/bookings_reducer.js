import {RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKING_ERRORS} from '../../actions/booking_actions/booking_action';
import {RECEIVE_USER} from '../../actions/user_actions';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    // debugger
    switch (action.type) {
        case RECEIVE_BOOKINGS:
            console.log("receve all")
            return action.bookings;
        case RECEIVE_BOOKING: 
        console.log("receve 1")
            return Object.assign({}, state, {[action.booking.id]: action.booking});
        case REMOVE_BOOKING:
            console.log("remove")
            delete nextState[action.bookingId]
            return nextState;
        case RECEIVE_USER:
            console.log("user")
            return Object.assign({}, state, action.user.bookings)
        default:
            console.log("default")
            return state;
    }
}

export default bookingsReducer;