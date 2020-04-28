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
            <div>
                
            </div>
        )
    };

};

export default withRouter(BookingItem)

