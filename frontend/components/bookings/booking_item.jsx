import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingItem extends React.Component {
    constructor(props) {
        super(props);

    };

    handleClick() {
        this.props.deleteBooking(this.props.booking.id)
        //WRITE/FEED this info into user-show page
    };

    
    render () {

        return (
            <div>
                
            </div>
        )
    };

};

