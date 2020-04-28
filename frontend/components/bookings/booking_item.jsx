import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingItem extends React.Component {
    constructor(props) {
        super(props);

    };

    handleClick() {
        this.props.deleteBooking(this.props.booking.id)
    };

    
    render () {

        return (
            <div className="booking_item_box">
                <div className="booking_item">
                    <div className="booking_list_name"></div>
                    <div className="booking_start"></div>
                    <div className="booking_end"></div>
                    <button onClick={this.handleClick}>Cancel</button>
                </div>
            </div>
        )
    };

};

export default withRouter(BookingItem)

