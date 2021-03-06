import * as ApiUtil from '../../util/booking_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const UPDATE_BOOKING = 'UPDATE_BOOKING';
export const REMOVE_BOOKING_ERRORS = 'REMOVE_BOOKING_ERRORS'

export const receiveBookings = (bookings) => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

export const receiveBooking = (booking) => {
    return (
        {type: RECEIVE_BOOKING,
        booking}
)};

export const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
});

export const receiveBookingErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});

export const removeBookingErrors = () => ({
    type: REMOVE_BOOKING_ERRORS
});




// export const updateBooking = (booking) => ({
//     type: UPDATE_BOOKING,
//     booking
// });


export const createBooking = booking => dispatch => {
    return ApiUtil.createBooking(booking).then(    
        booking => {
            dispatch(receiveBooking(booking))},
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
};
// export const createBooking = (booking) => (dispatch) => {
//     return (
//     ApiUtil.createBooking(booking)    
//         .then( res => dispatch(receiveBooking(res)))
//         )
// }

export const fetchBooking = booking => dispatch => {
    return ApiUtil.fetchBooking(booking).then(
        booking => dispatch(receiveBooking(booking)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
};

export const fetchBookings = (userId) => (dispatch) => {
         return ApiUtil.fetchBookings(userId).then(
           (bookings) => dispatch(receiveBookings(bookings)),
           (err) => dispatch(receiveBookingErrors(err.responseJSON))
         );
       };
export const deleteBooking = (bookingId) => dispatch => {
    return ApiUtil.deleteBooking(bookingId).then(
        () => dispatch(removeBooking(bookingId)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
};

export const patchBooking = (booking) => dispatch => {
    return ApiUtil.updateBooking(booking).then(
        booking => dispatch(receiveBooking(booking)),
        err => dispatch(receiveBookingErrors(err.responseJson))
    )
};

// export const clearBookingErrors = () => {
//     dispatch(removeBookingErrors())
// };