import React from 'react';

class BookingItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    };

    handleClick() {
        debugger
        this.props.deleteBooking(this.props.match.params.bookingsId)
            // window.location.reload(false);
    };

    componentDidMount () {

    };

    
    render () {
        // if (this.props.current_user === this.props.booking.user_id) {
        return (
            <div className="booking_item_box">
                <div className="booking_item">
                    <div className="booking_list_name"></div>
                    <div className="booking_start"></div>
                    <div className="booking_end"></div>
                    <button onClick={this.handleClick} >Cancel</button>
                </div>
            </div>
        )
        // };
    };
};

export default BookingItem;

