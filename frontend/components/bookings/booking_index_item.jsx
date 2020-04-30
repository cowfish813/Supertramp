import React from 'react';

class BookingItem extends React.Component {
    constructor(props) {
        super(props);



        this.handleClick = this.handleClick.bind(this);

    };

    handleClick() {
        this.props.deleteBooking(this.props.booking.id)
            // window.location.reload(false); //reloads after delete. prefer re-render

    };

    componentDidUpdate () {

    };
    // componentDidMount() {
    //     this.props.fetchBookings()
    // };

    
    render () {
        if (this.props.current_user === this.props.booking.user_id) {
        return (
            <div className="booking_item_box">
                <div className="booking_item">
        <div className="booking_list_name">{this.props.listing[this.props.booking.listing_id]}</div>
                    <div className="booking_start"></div>
                    <div className="booking_end"></div>
                    <button onClick={this.handleClick} >Cancel</button>
                </div>
            </div>
        );
    } else {
        return(
            null
        );
    }};
};

export default BookingItem;

