import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// import moment from 'moment';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        this.props.deleteBooking(this.props.booking.id)
    }

    handleModal() {
        this.props.openModal('Booking', this.props.booking)
    }

    render () {
        const { booking } = this.props;
        let checkin = new Date(booking.check_in).toGMTString();
        let checkout = new Date(booking.check_out).toGMTString();
        checkin = checkin.split(' ').slice(0, 4).join(' ');
        checkout = checkout.split(' ').slice(0, 4).join(' ');

        if (this.props.current_user === this.props.booking.user_id) {
            return (
            <div className="booking_item_box" id="booking_item">
                <div className="booking_img_container">
                    <Link to={`/listings/${booking.listing_id}`}>
                    <div className="booking_list_name">{booking.listing_name}</div>
                    <img className="booking_img" src={booking.photoUrls} alt=""/>
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
                        {booking.capacity}</div>
                    <div className="bookings_item">
                        <strong>Total Price: </strong>
                        ${booking.price}</div>
                    {this.props.status ? 
                        <div className="bookings_item_cancel">
                            <button onClick={this.handleClick} className="bookingCancel usershowbutton">Cancel</button>
                            <button onClick={this.handleModal} className="bookingChange usershowbutton">Change Booking</button>
                        </div>
                        : <></>
                    }
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

