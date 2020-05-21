import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        this.props.deleteBooking(this.props.booking.id)
        .then(()=> this.props.deleteItemComponent(this.props.booking.id));
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleModal(bookingId, listId) {
        this.props.openModal('Booking', bookingId);
    }

    render () {
        const checkin = new Date(this.props.booking.check_in).toDateString()
        const checkout = new Date(this.props.booking.check_out).toDateString()


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
                        {this.props.booking.capacity}</div>
                    <div className="bookings_item">
                        <strong>Total Price: </strong>
                        ${this.props.booking.price}</div>
                    <div className="bookings_item_cancel">

                        <button onClick={this.handleClick} className="bookingCancel usershowbutton">Cancel</button>
                        <button onClick={() => this.handleModal(this.props.booking, this.props.booking.listing_id)} className="bookingChange usershowbutton">Change Booking</button>
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

