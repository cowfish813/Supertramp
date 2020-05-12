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

export const createBooking = booking => (
    $.ajax({
        url: `/api/bookings`,
        method: 'POST',
        data: {booking}
    })
);
// debugger
export const deleteBooking = bookingId => (
    $.ajax({
        url: `/api/bookings/${bookingId}`,
        method: 'DELETE'
    })
);

export const updateBooking = (booking) => {
    debugger
    return $.ajax({
        url: `/api/bookings${booking.id}`,
        method: 'PATCH',
        data: { booking }
    })
};