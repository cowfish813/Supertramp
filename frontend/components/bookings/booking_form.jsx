import React from 'react';
import { withRouter } from 'react-router-dom';
// import { DateRangePicker, SingleDatePicker } from 'react-dates';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId,
            listingId: this.props.match.params.listingId,
            listingName: this.props.listing.name //INVESTIGATE STATE OF LISTING.
            check_in: null,
            check_out: null,
            capacity: 1
        }
    }

    render () {

        return (
            <div>
                {/* https://github.com/airbnb/react-dates */}
                {/* MUST go through this documentation beore writing the rest of it */}
            </div>
        )
    }

}
export default withRouter(BookingForm)


