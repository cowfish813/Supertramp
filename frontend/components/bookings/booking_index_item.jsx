import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import moment from 'moment';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check_out: this.props.booking.check_out,
            check_in: this.props.booking.check_in,
            price: this.props.booking.price,
            capacity: this.props.booking.capacity,
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.bookingDidUpdate = this.bookingDidUpdate.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        this.props.deleteBooking(this.props.booking.id)
        .then(()=> this.props.deleteItemComponent(this.props.booking.id));
    }


    componentDidMount() {
        //maybe don't do it...
        // this.props.fetchBookings(this.props.match.params.userId);
        // this.props.fetchListings(this.props.match.params.userId);
    }

    handleModal(bookingId, renderFxn) {
        this.props.openModal('Booking', bookingId, renderFxn)
    }

    bookingDidUpdate(newState) {
        this.setState({
            check_in: newState.check_in,
            check_out: newState.check_out,
            price: newState.price,
            capacity: newState.capacity
        });
    }

    render () {
        let checkin = new Date(this.state.check_in).toGMTString();
        let checkout = new Date(this.state.check_out).toGMTString();
        checkin = checkin.split(' ').slice(0, 4).join(' ');
        checkout = checkout.split(' ').slice(0, 4).join(' ');


        if (this.props.current_user === this.props.booking.user_id) {
            return (
            <div className="booking_item_box" id="booking_item">
                <div className="booking_img_container">
                    <Link to={`/listings/${this.props.booking.listing_id}`}>
                    <div className="booking_list_name">{this.props.booking.listing_name}</div>
                    <img className="booking_img" src={this.props.booking.photoUrls} alt=""/>
                    </Link>
                </div>
                <div className="booking_item_content">
                    <div className="bookings_item booking_start">
                        <strong> Check-In: </strong>
                        {checkin}</div>
                    <div className="bookings_item booking_end">
                        <strong> Check-Out: </strong>
                        {checkout}</div>
                    <div className="bookings_item">
                        <strong> Number of Guests: </strong>
                        {this.state.capacity}</div>
                    <div className="bookings_item">
                        <strong>Total Price: </strong>
                        ${this.state.price}</div>
                    <div className="bookings_item_cancel">

                        <button onClick={this.handleClick} className="bookingCancel usershowbutton">Cancel</button>
                        <button onClick={() => this.handleModal(this.props.booking, this.bookingDidUpdate)} className="bookingChange usershowbutton">Change Booking</button>
                    </div>
                </div>
            </div>
            );
        } else {
            return(
                null
            )
        };
    }
};

export default withRouter(BookingIndexItem);

