import * as ApiUtil from '../../util/booking_util'

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS'
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS'

export const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
})
export const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})

export const removeBooking = (booking) => ({
    type: REMOVE_BOOKING,
    booking: booking.id
})
export const receiveBookingErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
})


export const createBooking = booking => dispatch => {
    return ApiUtil.createBooking(booking).then(
        booking => dispatch(receiveBooking(booking)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
}
export const fetchBooking = booking => dispatch => {
    return ApiUtil.fetchBooking(booking).then(
        booking => dispatch(receiveBooking(booking)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
}
export const fetchBookings = () => dispatch => {
    return ApiUtil.fetchBookings().then(
        bookings => dispatch(receiveBookings(bookings)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
}
export const deleteBooking = (bookingId) => dispatch => {
    return ApiUtil.deleteBooking(bookingId).then(
        bookings => dispatch(removeBooking(bookings)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
}
