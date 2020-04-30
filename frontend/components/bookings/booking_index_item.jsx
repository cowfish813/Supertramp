import React from 'react';
import { withRouter } from "react-router-dom";


class BookingItem extends React.Component {
    constructor(props) {
        super(props);



        this.handleClick = this.handleClick.bind(this);
        this.handlePrice = this.handlePrice.bind(this)
    };

    handleClick() {
        this.props.deleteBooking(this.props.booking.id)
            // window.location.reload(false); //reloads after delete. prefer re-render

    };

    componentDidUpdate () {

    };
    // componentDidMount() {
    //     this.props.fetchBookings()
    // };
    handlePrice() {
        let num
        num = this.props.booking.price
        return num
    }
    
    render () {
        let listingUrl
        this.props.listings.forEach(listing => {
            // debugger
            if (listing.id === this.props.booking.listing_id) {
                listingUrl = listing.photoUrls
            }
            return listingUrl
        });

        const checkin = new Date(this.props.booking.check_in).toDateString()
        const checkout = new Date(this.props.booking.check_out).toDateString()


        if (this.props.current_user === this.props.booking.user_id) {
        return (
          <div className="booking_item_box">
                <div className="booking_list_name">{this.props.booking.listing_name}</div>
                <img src={listingUrl} alt=""/>
            <div className="booking_item_container">
                <div className="bookings_item booking_start">Check-In: {checkin}</div>
                <div className="bookings_item booking_end">Check-Out: {checkout}</div>
                <div className="bookings_item">Number of Guests: {this.props.booking.capacity}</div>
                <div className="bookings_item">Total Price: {this.handlePrice()}</div>
                <button onClick={this.handleClick}>Cancel</button>
            </div>
          </div>
        );
    } else {
        return(
            null
        );
    }};
};

export default BookingItem;

