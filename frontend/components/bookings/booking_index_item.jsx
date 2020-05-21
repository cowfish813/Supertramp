import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

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
        this.bookingDidUpdate = this.bookingDidUpdate.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.deleteBooking(this.props.booking.id)
        .then(()=> this.props.deleteItemComponent(this.props.booking.id));
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleModal(bookingId, renderFxn) {
        this.props.openModal('Booking', bookingId, renderFxn)
    }

    bookingDidUpdate(newState) {
        // debugger
        // if (newState.check_in.toDateString() !== this.state.check_in) {
        //     this.setState({
        //         check_in: newState.check_in
        //     });
        // } 
        // else if (newState.check_out.toDateString() !== this.state.check_out) {
        //     this.setState ({
        //         check_out: newState.check_out
        //     });
        // }
        // else if (newState.price !== this.state.price) {
        //     this.setState({
        //         price: newState.price
        //     });
        // }
        // else if (newState.capacity !== this.state.capacity) {
        //     this.setState({
        //         capacity: newState.capacity
        //     });
        // }
        this.setState({
            check_in: newState.check_in,
            check_out: newState.check_out,
            price: newState.price,
            capacity: newState.capacity
        })
    }

    render () {
        let checkin = new Date(this.state.check_in).toDateString()
        let checkout = new Date(this.state.check_out).toDateString()


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

