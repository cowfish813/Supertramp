import React from 'react';
import BookingIndexItem from './booking_index_item';


class BookingIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookings: this.props.bookings
        }

        this.deleteItemComponent = this.deleteItemComponent.bind(this);
    }

    deleteItemComponent(id) {
        console.log(this.state, "before")
        let that = this;
        this.setState(() => {
        return {
            bookings: that.state.bookings.filter((booking => booking.id !== id))
        }}
        );

        console.log(this.state, "after")
    }

    componentDidMount() {
        // debugger
        this.setState({
            bookings: this.props.bookings
        })
    }

    componentWillReceiveProps(prevProps, nextProps) {
        // debugger
        // this.setState({
        //     bookings: prevProps.booking
        // })
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
                            // bookings={this.props.bookings}
                            listings={this.props.listings}
                            fetchBookings={this.props.fetchBookings}
                            fetchListings={this.props.fetchListings}
                            bookings={this.state.bookings}
                            deleteItemComponent={this.deleteItemComponent}
                        />
                    ))}
                </div>
        )
    }
}

export default BookingIndex