export const fetchBookings = (user_id) =>{
       return  $.ajax({
           url: "/api/bookings",
           data: {booking: {user_id: user_id}}
           })};
        

export const fetchBooking = (bookingId) => (
    $.ajax({
        url: `/api/bookings/${bookingId}`,
        data: { user_id: user_id }
    })
);

export const createBooking = booking => {
    return $.ajax({
        url: `/api/bookings`,
        method: 'POST',
        data: {booking}
    })
};
export const deleteBooking = bookingId => (
    $.ajax({
        url: `/api/bookings/${bookingId}`,
        method: 'DELETE'
    })
);

export const updateBooking = (booking) => {
    return $.ajax({
        url: `/api/bookings/${booking.id}`,
        method: 'PATCH',
        data: { booking }
    })
};