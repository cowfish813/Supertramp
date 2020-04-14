import React from 'react';
import { withRouter } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId,
            listingId: this.props.match.params.listingId,
            listingName: this.props.listing.name,//INVESTIGATE STATE OF LISTING.
            check_in: null,
            check_out: null,
            capacity: 1
        }
        this.highlighted = this.highlighted.bind(this);
        this.handleCapacity = this.handleCapacity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCapacity(num) {
        this.setState({
            capacity: num
        });
    };

    highlighted(day) {
        return day.isSame(this.state.check_in)
    };

    handleSubmit(e) {
        e.preventDefault();

        if(!(this.props.currentUser)) { //check currentuser
            this.props.openModal('Login')
        } else if(!(this.state.check_in) || !(this.state.check_out)) {
            return 'Booking Error'
        };
        const booking = {
            user_id: this.props.currentUserId,
            listingId: listingId,
            listingName: this.props.listing.name,
            check_in: this.state.check_in.format('YYY/MM/DD'),
            check_out: this.state.check_out.format('YYY/MM/DD'),
            capacity: 1
        }
        this.props.createBooking(booking)
            .then(this.props.history.push(`./users/${this.props.currentUser}`)); //reroutes to user show page
    };


    render () {
        {/* https://github.com/airbnb/react-dates */}
        {/* MUST go through this documentation beore writing the rest of it */}

        return (

                <div className="widget-container">
                    <form className="wrapper" onSubmit={this.handleSubmit}>
                        <div className="price-wrapper">
                            <div className="price">{this.props.list.price}</div>
                        </div>
                        <div className="dates-and-guest-content">
                            <div className="col checkin">
                                <div className="label">
                                    Check in
                    <input type="date" className="col_box" />
                                </div>
                            </div>
                            <div className="col checkout">
                                <div className="label">
                                    Check out
                    <input type="date" name="" id="" className="col_box" />
                                </div>
                            </div>
                            <div className="col capacity">
                                <div className="label">
                                    Guests
                    <input type="number" name="" id="" className="col_box" />
                                </div>
                            </div>
                        </div>
                        <button className="booking-button">Book Now</button>
                    </form>
                </div>

        )
    }

}
export default withRouter(BookingForm)


