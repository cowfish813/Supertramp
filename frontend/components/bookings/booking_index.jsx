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
            sort: "Soonest",
            active: [],
            upcoming: [],
            completed: []
        };

        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount() {
        //start sorting active, upcoming, completed
        const current = [];
        const past = [];
        const future = [];
        const currentDate = new Date();
        this.state.bookings.forEach(booking => {
            const checkout = new Date(booking.check_out);
            const checkin = new Date(booking.check_in);

            if (currentDate > checkin && currentDate < checkout) { //check for current trip
                current.push(booking);
            } else if (currentDate > checkout) { //check if we are past checkout
                past.push(booking)
            } else {
                future.push(booking);
            }
        })

        this.setState({
            active: current,
            upcoming : future,
            completed: past
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

        const { sort, upcoming } = this.state;
        const sortedBookings = upcoming.sort((booking1, booking2) => {
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
        const {active, upcoming, completed} = this.state;

        if ((this.props.bookings).length < 1) {
            return <div>Get outside!</div>
        } else {
            return (
                    <div className="bookings">
                        <div id="active"> 
                            <p className="divider-label">{active.length ? "Current Trips" : ""}</p>
                            {this.state.active.map((booking, i) => (
                                <BookingIndexItem
                                    deleteBooking={false}
                                    booking={booking}
                                    key={booking.id}
                                    current_user={this.props.user.id}
                                    listings={this.props.listings}
                                    bookings={this.state.bookings}
                                    deleteItemComponent={this.deleteItemComponent}
                                    openModal={this.props.openModal}
                                    fetchBookings={this.props.fetchBookings}
                                    status={false}
                                />
                            ))}
                        </div>

                        <div id="upcoming">
                            <p className="divider-label">{upcoming.length ? "Upcoming Trips" : ""}</p>
                            {this.state.upcoming.length > 1 ? 
                                <button 
                                    className="bookingCancel" 
                                    onClick ={this.handleSort}>
                                        {this.state.sort}
                                </button> 
                                : <>{/* NO CONTENT if length <= 1 */}</>}
                            {this.state.upcoming.map((booking, i) => (
                                <BookingIndexItem
                                    deleteBooking={false}
                                    booking={booking}
                                    key={booking.id}
                                    current_user={this.props.user.id}
                                    listings={this.props.listings}
                                    bookings={this.state.bookings}
                                    deleteItemComponent={this.deleteItemComponent}
                                    openModal={this.props.openModal}
                                    fetchBookings={this.props.fetchBookings}
                                    status={true}
                                />
                            ))}
                        </div>

                        {/* only show if there are previous bookings */}
                        <div id="completed">
                            <p className="divider-label">{completed.length ? "Previous Trips" : ""}</p>
                                {/* order by most recent, disable delete/update */}
                            {this.state.completed.map((booking, i) => (
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
                                    status={false}
                                />
                            ))}
                        </div>
                    </div>
            )
        };
    }
}

export default withRouter(BookingIndex)