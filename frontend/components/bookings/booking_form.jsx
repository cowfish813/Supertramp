import React from "react";
import { withRouter } from "react-router-dom";
import BookingFormFields from "./booking_form_fields";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.removeBookingErrors([]);
        if (this.props.currentUser) this.props.fetchBookings(this.props.currentUser.id);
    }

    handleSubmit(fields) {
        const {currentUser, list, openModal, createBooking, history} = this.props;
        if (!currentUser) {
            openModal("Login");
            return;
        }

        createBooking({
            ...fields,
            listing_id: list.id,
            user_id: currentUser.id,
            host_id: list.host_id,
            listing_name: list.name,
        }).then(() => history.push(`/users/${currentUser.id}`));
    }

    render() {
        const { list, bookings = [], errors = [] } = this.props;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const excludedDates = [
            ...bookings
                .filter((occupied) => occupied.listing_id === list.id)
                .map((b) => ( { start: new Date(b.check_in), end: new Date(b.check_out) })),
                { start: new Date("1968-01-01"), end: yesterday }
        ];

        return (
            <BookingFormFields
                listing={list}
                excludedDates={excludedDates}
                errors={errors[0]}
                submitLabel="Request to Book"
                dateLabel="Add Dates"
                onSubmit={this.handleSubmit}
            />
            // <div className="widget-container">
            //     <form className="w100 flex flex-col" onSubmit={this.handleSubmit}>
            //         <div className="price-wrapper">
            //             <div className="price">
            //                 {`$${this.props.list.price}`}
            //                 <p>per night</p>
            //                 <span className="booking_errors">{BookingError}</span>
            //             </div>
            //         </div>

            //         <div className="dates-and-guest-content">
            //             <div onClick={this.handleFocusDate} className="booking-label col booking-border margin7">
            //                 <p className="flex">Add dates</p>
            //                 <DatePicker
            //                     id="datePicker"
            //                     showIcon
            //                     onChange={this.handleCheckIn}
            //                     startDate={this.state.check_in}
            //                     endDate={this.state.check_out}
            //                     selectsRange
            //                     monthsShown={2}
            //                     placeholderText="Select Date"
            //                     toggleCalendarOnIconClick
            //                     excludeDateIntervals={this.state.excludedDates}
            //                 />
            //             </div>

            //             <div onClick={this.handleFocusCapacity} className="booking-label col booking-border margin7">
            //                 <p className="mgn-top">Add guests</p>
            //                 <div className="flex flex-wrap">
            //                     <input
            //                         type="number"
            //                         name="capacity"
            //                         placeholder="1"
            //                         id="capacity_input"
            //                         min="1"
            //                         max={this.props.list.capacity}
            //                         onChange={this.handleCapacity}
            //                     />
            //                     <p id="guest-grammar">{this.state.guest}</p>
            //                 </div>
            //             </div>
            //         </div>

            //         <div id="price_estimate" className="flex flex-wrap flex-row f-between">
            //             <p id="estimate_price" className="mrgn-10">{this.props.list.price} x {this.state.days} {this.state.nights} </p>
            //             <p id="total_price" className="mrgn-10">Total: ${this.state.price || this.props.list.price}</p>
            //         </div>

            //         <button className="booking-button">Request to Book</button>
            //     </form>
            // </div>
        );
    }
}

export default withRouter(BookingForm);