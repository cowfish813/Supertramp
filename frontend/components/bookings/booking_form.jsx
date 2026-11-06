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
        );
    }
}

export default withRouter(BookingForm);