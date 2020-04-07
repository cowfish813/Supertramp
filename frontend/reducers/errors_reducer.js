import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import BookingErrorsReducer from './bookings/booking_errors_reducer';


const errorsReducer = combineReducers ({
    session: sessionErrorsReducer,
    bookings: BookingErrorsReducer
});

export default errorsReducer;