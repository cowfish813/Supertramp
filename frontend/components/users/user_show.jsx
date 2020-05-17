import React from 'react';
// import BookingItem from '../bookings/booking_index_item';
import BookingItem from '../bookings/booking_index_container';

class User extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = {
            count: this.props.bookings.length

            //index of bookings in state
            //bookings alreadyt fetched, call setstate and puit them on local state
            //write method in this comp that sets stat on 
                //take in argument a booking to be removed
                //remove booking from state //i can do that from the window but not on my code...
                //setstate on remaining bookings
                //..bind(this) in constructor
                    //.pass entire function as a prop to booking item
                    //so when it is deleted, that function runs it
        //     count: document.querySelectorAll("#BookingItemId").length
        }
    }; 

    

    componentDidMount () {
        window.scrollTo(0, 0);
        this.props.fetchBookings(this.props.match.params.userId);
        this.props.fetchListings(this.props.match.params.userId); //eliminates new booking photo error
        // this.setState({
        //     count: this.props.bookings
        // });
    }

    componentWillReceiveProps(prevProps, nextProps) {
        // debugger

    }



    render () {
        if ((this.props.bookings).length < 1) {
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
                            {/* bonus feature. will eventually be review item index */}
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
                    />

                    <div className="reviews-comp">
                        {/* bonus feature. will eventually be review item index */}
                    </div>
                </div>

            </div>
    )};
}
};


export default User;