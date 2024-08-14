import React from 'react';
import BookingIndexItem from './booking_index_item';
import { withRouter } from "react-router-dom";


class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
        const sortedBookings = this.props.bookings.sort((booking1, booking2) => 
            (new Date(booking1.check_in) - new Date(booking2.check_in)))

        this.state = {
            bookings: sortedBookings,
            sort: "Soonest"
        };

        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount() {
        this.setState({
            bookings: this.props.bookings
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.bookings !== prevProps.bookings) {
            this.setState({
                bookings: this.props.bookings
            });
        };
    }

    handleSort(e) {
        e.preventDefault();

        const { sort, bookings } = this.state;
        const sortedBookings = bookings.sort((booking1, booking2) => {
            return sort === "Soonest"
                ? new Date(booking2.check_in) - new Date(booking1.check_in)
                : new Date(booking1.check_in) - new Date(booking2.check_in);
        });

        this.setState({
            bookings: sortedBookings,
            sort: sort === "Soonest" ? "Latest" : "Soonest"
        });
    }

    render(){
        if ((this.props.bookings).length < 1) {
            return <div>Get outside!</div>
        } else {
            return (
                    <div className="bookings">
                        {this.state.bookings.length > 1 ? 
                            <button 
                                className="bookingCancel" 
                                onClick ={this.handleSort}>
                                    {this.state.sort}
                            </button> 
                            : <>{/* NO CONTENT if length <= 1 */}</>}
                        {this.state.bookings.map((booking, i) => (
                            <BookingIndexItem
                                deleteBooking={this.props.deleteBooking}
                                booking={booking}
                                key={booking.id}
                                current_user={this.props.user.id}
                                listings={this.props.listings}
                                bookings={this.state.bookings}
                                deleteItemComponent={this.deleteItemComponent}
                                openModal={this.props.openModal}
                                fetchBookings={this.props.fetchBookings}
                                
                            />
                        ))}
                    </div>
            )
        };
    }
}

export default withRouter(BookingIndex)