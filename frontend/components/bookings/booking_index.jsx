import React from 'react';
import BookingIndexItem from './booking_index_item';
import { withRouter } from "react-router-dom";


class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
        const sortedBookings = this.props.bookings.sort((booking1, booking2) => 
            (new Date(booking2.check_in) - new Date(booking1.check_in)))

        this.state = {
            bookings: sortedBookings,
            sort: "DESC",
            sortButton: <></>
        };

        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount() {
        this.setState({
            bookings: this.props.bookings
        })

        if (this.state.bookings.length > 1) {
            this.setState({
                sortButton:
                    <button 
                        className="bookingCancel" 
                        onClick ={this.handleSort}>
                            {this.state.sort}
                    </button>
            })
        }
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
            return sort === "DESC"
                ? new Date(booking2.check_in) - new Date(booking1.check_in)
                : new Date(booking1.check_in) - new Date(booking2.check_in);
        });

        this.setState({
            bookings: sortedBookings,
            sort: sort === "DESC" ? "ASC" : "DESC"
        });
    }

    render(){
        if ((this.props.bookings).length < 1) {
            return <div>Get outside!</div>
        } else {
            return (
                <div className="bookings">
                    {this.state.sortButton}
                    {/* <button onClick={handleSort}></button> */}
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