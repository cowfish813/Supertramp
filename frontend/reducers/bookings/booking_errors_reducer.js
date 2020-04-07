import {RECEIVE_BOOKING_ERRORS, RECEIVE_BOOKING} from "../../actions/booking_actions/booking_action";
import { RECEIVE_ERRORS } from "../../actions/session_actions";

const BookingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKING:
            return action.errors
        case RECEIVE_ERRORS:
            return []
        default:
            return state;
    }
};

export default BookingErrorsReducer;