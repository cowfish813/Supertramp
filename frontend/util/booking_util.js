export const fetchBookings = () => (
    $.ajax({
        url: '/api/bookings',
    })
)

export const fetchBooking = (bookingId) => (
    $.ajax({
        url: `/api/bookings/${bookingId}`,
        data: { userId: userId }
    })
)

export const createBooking = booking => (
    $.ajax({
        url: `/api/bookings`,
        method: 'POST',
        data: {booking}
    })
)

export const deleteBooking = bookingId => (
    $.ajax({
        url: `/api/bookings/${bookingId}`,
        method: DELETE
    })
)