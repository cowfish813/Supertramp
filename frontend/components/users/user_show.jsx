import React from 'react'
import BookingItem from '../bookings/booking_item'



class User extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount () {
        // this.props.fetchBookings(this.props.match.params.userId)
    }
 

    handleClick() {
        this.props.deleteBooking(this.props.booking.id)
    };


    render () {
        // if (Object.getOwnPropertyNames(this.props.bookings).length < 1) {
        //     return null
        // }

        return (
            <div className="userBody">

                {/* left user panel */}
                <div className="left_panel">
                    <div className="bioPanel">
                        {this.props.user.first_name}
                        <div className="panelHeader">
                            <div className="left_avatar">

                            </div>
                            <div className="right_header">
                                <h2 className="userName">{this.props.user.first_name}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="middleBody">
                    <div className="bookings">
                        {this.props.bookings.map(booking => (
                            <BookingItem 
                            deleteBooking={ this.props.deleteBooking }
                            booking={ booking }
                            key={ booking.id }
                            />
                        ))}
                    </div>
                    <div className="reviews-comp">
                        {/* bonus feature. will eventually be review item index */}
                    </div>
                </div>

            </div>
    )};
};

export default User