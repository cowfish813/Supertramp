import {RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKING_ERRORS} from '../../actions/booking_actions/booking_action';
import {RECEIVE_USER} from '../../actions/user_actions';
// import {RECEIVE_BOOKING} from '../../actions/booking_actions/booking_action'

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    console.log("state", state)
    switch (action.type) {
        case RECEIVE_BOOKINGS:
            console.log("receve all")
            return action.bookings;
        case RECEIVE_BOOKING: 
            debugger
            console.log("receve 1")
            // let newState = Object.assign({}, state, { [action.booking.id]: action.booking });
            let newState = Object.assign({}, state, action.booking)
            // console.log(newState)
            // debugger 
            // console.log("hello", action.booking)
            // return action.booking;
            return newState;
        case REMOVE_BOOKING:
            console.log("remove")
            delete nextState[action.bookingId]
            return nextState;
        case RECEIVE_USER:
            console.log("user")
            return Object.assign({}, state, action.user.bookings);
        default:
            console.log("default")
            return state;
    }
}

export default bookingsReducer;
