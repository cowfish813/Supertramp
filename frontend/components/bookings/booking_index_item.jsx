import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';


class BookingItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: document.querySelectorAll("#booking_item").length
        }
        this.handleClick = this.handleClick.bind(this);
        // console.log(this.state)
        // console.log(document.querySelector("#booking_item").length)
    };

    handleClick() {
        this.props.deleteBooking(this.props.booking.id)
            // window.location.reload(false); //reloads after delete. prefer re-render
    };

    componentDidMount() {
        this.setState({
            count: document.querySelectorAll("#booking_item").length
        }) //obtain count
    }
    
    componentDidUpdate() {
        // if (this.state.count -= 1 ) {
        // }
        // if (!(this.state.count)) {

        // }
        // console.log(this.state.count)
        // console.log(document.querySelectorAll("#booking_item").length)
        
        // if (this.state.count-- === count: document.querySelectorAll("#booking_item").length){
        //     this.setState({
        //         count: document.querySelectorAll("#booking_item").length
        //     })
        // }
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

                    <button onClick={this.handleClick} className="bookingCancel">Cancel</button>
                    </div>
                </div>
            </div>
            );
        } else {
            return(
                null
            );
        }
    };
};

export default withRouter(BookingItem);

