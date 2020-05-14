import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: this.props.bookings
        };
        // debugger
        
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleClick(e) {
        e.preventDefault()
        // debugger
        console.log(this.state)
        this.setState({
            bookings: this.state.bookings.filter( (booking => booking.id !== this.props.booking.id))
        })
        console.log(this.state)
        this.props.deleteBooking(this.props.booking.id)
        // .then(this.props.fetchBookings())
        // this.props.fetchBookings()
            //.then(fetchbookings) 
            // .then(setState) *for local
            // window.location.reload(false); //reloads after delete. prefer re-render
    }

    handleChange() {
        this.props.openModal('Booking')
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchBookings(this.props.match.params.userId);
        this.props.fetchListings(this.props.match.params.userId); //eliminates new booking photo error
    }

    componentWillReceiveProps(prevProps, nextProps) {
        // debugger
        // nextprops.booking isn't the one to be removed??
        // const arr = nextProps.bookings.filter = booking => (booking.id !== nextProps.booking.id)
        // const arrlength = arr.length
        // this.setState({
        //     count: arrlength
        // });
    }
    
    componentDidUpdate(prevProps, nextProps) {
        // console.log(prevProps, "bii")
        // console.log(nextProps, "bii")
        // debugger
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
                    {/* <button onClick={this.handleChange} className="bookingChange">Change Booking</button> */}
                        <button onClick={() => this.props.openModal('Booking')} className="bookingChange usershowbutton">Change Booking</button>
                    </div>
                </div>
            </div>
            );
        } else {
            return(
                null
            );
        }
    }
};

export default withRouter(BookingIndexItem);

