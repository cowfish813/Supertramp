import React from 'react';
import BookingIndexItem from './booking_index_item';
import { withRouter } from "react-router-dom";


class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            bookings: this.props.bookings
        }

        this.deleteItemComponent = this.deleteItemComponent.bind(this);
    }

    deleteItemComponent(id) {
        const updatedbooking = 
            this.state.bookings.filter((booking => booking.id !== id));
        this.setState({
            bookings: updatedbooking
            });
    }

    componentDidMount() {
        // debugger
        this.props.fetchBookings(this.props.match.params.userId);
        this.props.fetchListings(this.props.match.params.userId);

        this.setState({
            bookings: this.props.bookings
        })
    }


    render(){
        if ((this.props.bookings).length < 1) {
            return <div>Get outside!</div>
        } else {
            return (
                    <div className="bookings">
                        {this.state.bookings.map((booking, i) => (
                            <BookingIndexItem
                                deleteBooking={this.props.deleteBooking}
                                booking={booking}
                                key={i}
                                current_user={this.props.user.id}
                                listings={this.props.listings}
                                bookings={this.state.bookings}
                                deleteItemComponent={this.deleteItemComponent}
                                openModal={this.props.openModal}
                                fetchBookings={this.props.fetchBookings}
                                fetchListings={this.props.fetchListings}
                            />
                        ))}
                    </div>
            )
        }
    }
}

export default withRouter(BookingIndex)