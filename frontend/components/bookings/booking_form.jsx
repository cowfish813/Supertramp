import React from "react";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 1,
            nights: "night",
            guest: "guest",
            price: this.props.list.price,
            capacity: 1,
            listing_name: this.props.list.name,
            check_in: new Date(),
            check_out: new Date(),
            errors: "",
            bookings: this.props.bookings,
            excludedDates: []
        };

        this.myref = React.createRef(null);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCapacity = this.handleCapacity.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleFocusCapacity = this.handleFocusCapacity.bind(this);
        this.handleFocusDate = this.handleFocusDate.bind(this);
        this.handleExclusions = this.handleExclusions.bind(this);
    }

    componentDidMount() {
        this.props.removeBookingErrors([]);
        if (this.props.currentUser) this.props.fetchBookings(this.props.currentUser.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.bookings !== prevProps.bookings) {
            this.setState({ bookings: this.props.bookings }, this.handleExclusions);
        }

        if (this.state.errors !== this.props.errors[0]) {
            this.setState({ errors: this.props.errors[0] });
        }
    }

    handleExclusions() {
        const excludedDatesforListingUnderUser = [];
        if (this.state.bookings.length) {
            this.state.bookings.forEach((booking) => {
                if (booking.listing_id === this.props.list.id) {
                    excludedDatesforListingUnderUser.push({ start: booking.check_in.substring(0, 10), end: booking.check_out.substring(0, 10) });
                }
            });
        }

        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        excludedDatesforListingUnderUser.push({ start: "1968/01/01", end: yesterday });
        this.setState({ excludedDates: excludedDatesforListingUnderUser });
    }

    handleFocusCapacity() {
        const capInput = document.getElementById('capacity_input');
        capInput.focus();
    }

    handleFocusDate() {
        const dateInput = document.getElementById('datePicker');
        dateInput.focus();
    }

    handlePrice(date) {
        const mseconds = Date.parse(date) - Date.parse(this.state.check_in);
        const days = mseconds / (1000 * 60 * 60 * 24);
        this.setState({
            price: days * this.props.list.price,
            check_out: date,
            days: days || this.state.days
        });

        days > 1 ? this.setState({nights: "nights"}) : this.setState({nights: "night"});
    }

    handleCapacity(event) {
        this.setState({ capacity: event.currentTarget.value });
        event.currentTarget.value > 1 ? 
        this.setState({guest: "guests"}) : this.setState({guest: "guest"});
    }

    handleCheckIn(dates) {
        const [start, end] = dates;
        this.setState({ check_in: start, check_out: end });
        this.handlePrice(end);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.currentUser) { 
            this.props.openModal('Login');
        } else if (this.state.price <= 0) {
            this.setState({ price: null });
        } else {
            const booking = {
                check_in: this.state.check_in.toISOString(),
                check_out: this.state.check_out.toISOString(),
                capacity: this.state.capacity,
                listing_id: this.props.list.id,
                user_id: this.props.currentUser.id,
                host_id: this.props.list.host_id,
                listing_name: this.props.list.name,
                price: this.state.price
            };
            
            this.props.createBooking(booking)
                .then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
        }
    }

    render() {
        let BookingError = null;
        if (this.state.errors) BookingError = this.state.errors;
        

        return (
            <div className="widget-container">
                <form className="w100 flex flex-col" onSubmit={this.handleSubmit}>
                    <div className="price-wrapper">
                        <div className="price">
                            {`$${this.props.list.price}`}
                            <p>per night</p>
                            <span className="booking_errors">{BookingError}</span>
                        </div>
                    </div>

                    <div className="dates-and-guest-content">
                        <div onClick={this.handleFocusDate} className="booking-label col booking-border margin7">
                            <p className="flex">Add dates</p>
                            <DatePicker
                                id="datePicker"
                                showIcon
                                onChange={this.handleCheckIn}
                                startDate={this.state.check_in}
                                endDate={this.state.check_out}
                                selectsRange
                                monthsShown={2}
                                placeholderText="Select Date"
                                toggleCalendarOnIconClick
                                excludeDateIntervals={this.state.excludedDates}
                            />
                        </div>

                        <div onClick={this.handleFocusCapacity} className="booking-label col booking-border margin7">
                            <p className="mgn-top">Add guests</p>
                            <div className="flex flex-wrap">
                                <input
                                    type="number"
                                    name="capacity"
                                    placeholder="1"
                                    id="capacity_input"
                                    min="1"
                                    max={this.props.list.capacity}
                                    onChange={this.handleCapacity}
                                />
                                <p id="guest-grammar">{this.state.guest}</p>
                            </div>
                        </div>
                    </div>

                    <div id="price_estimate" className="flex flex-wrap flex-row f-between">
                        <p id="estimate_price" className="mrgn-10">{this.props.list.price} x {this.state.days} {this.state.nights} </p>
                        <p id="total_price" className="mrgn-10">Total: ${this.state.price || this.props.list.price}</p>
                    </div>

                    <button className="booking-button">Request to Book</button>
                </form>
            </div>
        );
    }
}

export default withRouter(BookingForm);