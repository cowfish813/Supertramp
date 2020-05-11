import React from 'react';
import BookingItem from '../bookings/booking_index_item';


class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                <div className="bookings">
                    {this.props.bookings.map((booking, index) => (
                        <BookingItem
                            deleteBooking={this.props.deleteBooking}
                            booking={booking}
                            key={booking.id}
                            current_user={this.props.user.id}
                            bookings={this.props.bookings}
                            listings={this.props.listings}
                            fetchBookings={this.props.fetchBookings}
                        />
                    ))}
                </div>

            </div>
        )
    }
}

export default BookingIndex