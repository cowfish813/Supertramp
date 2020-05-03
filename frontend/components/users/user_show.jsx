import React from 'react';
// import BookingItem from '../bookings/booking_index_item_container';
import BookingItem from '../bookings/booking_index_item';

class User extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     count: document.querySelectorAll("#BookingItemId").length
        // }
    };

    componentDidMount () { //first fetch
        window.scrollTo(0, 0);
        this.props.fetchBookings(this.props.match.params.userId);
        this.props.fetchListings(this.props.match.params.userId);
    };

    // componentDidMount() {
    //     this.setState({
    //         count: document.querySelectorAll("#BookingItemId").length
    //     })
    // }
    // componentDidUpdate() { 
    //     if (!(this.props.bookings)) {
    //         this.props.bookings
    //     }
    // };

    render () {
        if ((this.props.bookings).length < 1) {
            return (
                <div></div>
            )
        } else {

        

        return (
            <div className="userBody">

                {/* left user panel */}
                <div className="left_panel">
                    <div className="bioPanel">
                        {this.props.user.first_name + " " + this.props.user.last_name}
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
                            deleteBooking={ this.props.deleteBooking }
                            booking={ booking }
                            key={ booking.id }
                            current_user={ this.props.user.id }
                            bookings={ this.props.bookings }
                            listings ={ this.props.listings }
                            id="BookingItemId"
                            />
                        ))}
                    </div>
                    <div className="reviews-comp">
                        {/* bonus feature. will eventually be review item index */}
                    </div>
                </div>

            </div>
    )};
}
};


export default User;