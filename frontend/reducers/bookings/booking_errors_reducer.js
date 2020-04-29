import {RECEIVE_BOOKING_ERRORS} from "../../actions/booking_actions/booking_action";
import { RECEIVE_ERRORS } from "../../actions/session_actions";

const BookingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKING_ERRORS:
            return action.errors
        case RECEIVE_ERRORS:
            return action.errors
        default:
            return state;
    }
};

export default BookingErrorsReducer;