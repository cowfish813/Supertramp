import React from 'react';
import BookingItem from '../bookings/booking_index_item_container';
// import BookingItem from '../bookings/booking_index_item;



class User extends React.Component {
    constructor(props) {
        super(props)
        
        // this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount () { //first fetch
        this.props.fetchBookings(this.props.match.params.userId);
    };

    componentDidUpdate() { 

    };
 

    // handleClick() {
    //     this.props.deleteBooking(this.props.booking.id)
    // };


    render () {
        // if (Object.getOwnPropertyNames(this.props.bookings).length < 1) {
        //     return (
        //         <div></div>
        //     )
        // }

        return (
            <div className="userBody">

                {/* left user panel */}
                <div className="left_panel">
                    <div className="bioPanel">
                        {this.props.user.first_name}
                        <div className="panelHeader">
                            <div className="left_avatar">
                                <img src="https://supertramp-mast.s3-us-west-1.amazonaws.com/24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png" alt=""/>
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
                            // deleteBooking={ this.props.deleteBooking }
                            // booking={ booking }
                            // key={ booking.id }
                            // current_user={ this.props.user.id }
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


export default User;