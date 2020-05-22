import React from 'react';
// import BookingItem from '../bookings/booking_index_item';
import BookingItem from '../bookings/booking_index_container';

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookings: {}
        };
    }; 

    

    componentDidMount () {
        window.scrollTo(0, 0);
        this.props.fetchBookings(this.props.match.params.userId);
        this.props.fetchListings(this.props.match.params.userId);
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if (nextProps.bookings !== prevProps.bookings) {
            return { bookings: nextProps.bookings }
        } else {
            return null
        };
    }

    render () {
        if ((this.state.bookings).length < 1) {
            return (
                <div className="userBody">
                    <div className="left_panel">
                        <div className="bioPanel">
                            {this.props.user.first_name + " " + this.props.user.last_name}
                            <div className="panelHeader">
                                <div className="left_avatar">
                                    <img src="https://supertramp-mast.s3-us-west-1.amazonaws.com/24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png" alt="" />
                                </div>
                                <div className="right_header">
                                    <h2 className="userName_show">Username: {this.props.user.username}</h2>
                                    <h2 className="email_show">Email: {this.props.user.email}</h2>
                                    {/* <button onClick={open modal?}>Update User Info</button> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="middleBody">
                        <div className="bookings">
                        </div>
                        <div className="reviews-comp">
                            {/* will eventually be review item index */}
                        </div>
                    </div>

                </div>
            )
        } else {

        

        return (
            <div className="userBody">
                <div className="left_panel">
                    <div className="bioPanel">
                        {this.props.user.first_name + " " + this.props.user.last_name}
                        <div className="panelHeader">
                            <div className="left_avatar">
                                <img src="https://supertramp-mast.s3-us-west-1.amazonaws.com/24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png" alt=""/>
                            </div>
                            <div className="right_header">
                                <h2 className="userName_show">Username: {this.props.user.username}</h2>
                                <h2 className="email_show">Email: {this.props.user.email}</h2>
                                {/* <button onClick={open modal?}>Update User Info</button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="middleBody">
                    <BookingItem 
                    user={this.props.user}
                    fetchListings={this.props.fetchListings}
                    />

                    <div className="reviews-comp">
                        {/* bonus feature. will eventually be review item index */}
                    </div>
                </div>

            </div>
        )};
    }
}


export default User;