import React from 'react';
// import BookingForm from '../../bookings/booking_form_container'
import { Link } from 'react-router-dom'
import ListMap from '../list_map'


class ListShow extends React.Component {
    constructor(props) {
        super(props)        
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchListing(this.props.match.params.listingsId);

        const mapOptions = {
            center: { lat: this.props.list.lat, lng: this.props.list.lng },
        //   center: { lat: 37.7758, lng: -122.435 },
          zoom: 13,
          mapTypeId: "terrain", //sets map to terrain type
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    handleListing () {
        this.props.fetchListing()
    }


    render () {
        return (
          <div className="show_body">
            <div className="social_share_target">
              <div className="photo_square">
                <div className="photo_title">
                  <h1>{this.props.name}</h1>
                  <img
                    className="list-show-photo"
                    src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/17855640_10105438859618553_1862219686291433231_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=U1_h6a7o6CgAX-BtgmW&_nc_ht=scontent-sjc3-1.xx&oh=97b66ead3b62704bba16c55dec9a9f20&oe=5E91FBB6"
                    alt=""
                  />
                  {/* <img className="list-show-photo" src={this.props.list.photoUrls}alt=""/> */}
                  {/* WOKRING. enable later when debugging list-show is complete */}
                </div>
              </div>
            </div>

            <div className="widget-container">
              <div className="wrapper">
                <div className="price-wrapper">
                  <div className="price">{this.props.list.price}</div>
                </div>
              </div>
              <div className="dates-and-guest-content">
                <div className="col checkin">
                  <div className="label">
                    Check in
                    <input type="date" className="col_box" />
                  </div>
                </div>
                <div className="col checkout">
                  <div className="label">
                    Check out
                    <input type="date" name="" id="" className="col_box" />
                  </div>
                </div>
                <div className="col capacity">
                  <div className="label">
                    Guests
                    <input type="number" name="" id="" className="col_box" />
                  </div>
                </div>
              </div>
            <button>Book Now</button>
            </div>

            <div className="show-liting">
              <div className="section-overview">
                <div className="content-bottom">
                  <div className="details-container">
                    <h1>{this.props.name}</h1>
                  </div>
                </div>

                <div className="row">
                  <div className="listed-by">{/* pic profile */}</div>
                  <div className="desc-wrapper">
                {this.props.description}
                  </div>
                  <div className="info-cards-wrapper">
                    <div className="info-cards"></div>
                    <div className="info-cards"></div>
                    <div className="info-cards"></div>
                  </div>
                </div>
              </div>

              <div className="feature-container"></div>
              <div className="map" ref={(map) => (this.mapNode = map)}></div>
              {/* < ListMap /> */}
            </div>
          </div>
        ); 

    }
}

ListShow.defaultProps = {
    list: {photoUrls: "",
    price: "",
    lat: "",
    lng: "",
    name: "",
    description: "",
    }
    //use this.state possibly
    // convertl ocal props to local state
    // if you submit some kind of review, you want new review to pop up on submit, update local state
    // when you call this.setstate - react comp auto re-renders
    // update database as well
    // as you trigger setstate - submit data through dispatch - send it to ajax call - persist to databse
}

export default ListShow