import * as ApiUtil from '../../util/booking_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

export const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

export const receiveBooking = booking => {
    return (
        {type: RECEIVE_BOOKING,
        booking}
)};

export const removeBooking = (booking) => ({
    type: REMOVE_BOOKING,
    booking: booking.id
});
export const receiveBookingErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});


export const createBooking = booking => dispatch => {
    console.log("outside", booking)
    return ApiUtil.createBooking(booking).then(    
        booking => {
            console.log("inside", booking)
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

export const fetchBookings = () => dispatch => {
    return ApiUtil.fetchBookings().then(
        bookings => dispatch(receiveBookings(bookings)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
};
export const deleteBooking = (bookingId) => dispatch => {
    debugger
    return ApiUtil.deleteBooking(bookingId).then(
        booking => dispatch(removeBooking(booking)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
};
