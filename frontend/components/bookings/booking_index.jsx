import React from 'react';
import BookingIndexItem from './booking_index_item'


class BookingIndex extends React.Component {
    constructor(props) {
        super(props)

        // debugger
    }

    render(){
        return (
                <div className="bookings">
                    {this.props.bookings.map((booking) => (
                        <BookingIndexItem
                            deleteBooking={this.props.deleteBooking}
                            booking={booking}
                            key={booking.id}
                            current_user={this.props.user.id}
                            bookings={this.props.bookings}
                            listings={this.props.listings}
                            fetchBookings={this.props.fetchBookings}
                            fetchListings={this.props.fetchListings}
                        />
                    ))}
                </div>
        )
    }
}

export default BookingIndex