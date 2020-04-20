import React from 'react';
import { Link } from 'react-router-dom'
import ListMap from '../list_map'
import { withRouter }from 'react-router-dom'
import BookingForm from '../../bookings/booking_form_container'

class ListShow extends React.Component {
    constructor(props) {
        super(props)    

        this.state = {
          photoUrls: this.props.list.photoUrls,
          price: this.props.list.price,
          lat: this.props.list.lat,
          lng: this.props.list.lng,
          name: this.props.list.name,
          description: this.props.list.description,
        }
    }

    componentDidUpdate(nextState) {
      
      console.log(nextState.list)
    }

    // componentWillReceiveProps() {

    // }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchListing(this.props.match.params.listingsId);
        // const mapOptions = {
        //     center: { 
        //         lat: this.state.lat, 
        //         lng: this.state.lng 
        //     },
        // //   center: { lat: 37.7758, lng: -122.435 },
        //   zoom: 13,
        //   mapTypeId: "terrain", //sets map to terrain type
        // };

        // // wrap this.mapNode in a Google Map
        // this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    // handleListing () {
    //     this.props.fetchListing()
    // }


    render () {
      // debugger
        return (
          <div className="show_body">
            <div className="social_share_target">
              <div className="photo_square">
                <img className="list-show-photo" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/28699040_10106495201840273_8915991695087874299_o.jpg?_nc_cat=105&_nc_sid=84a396&_nc_ohc=j1j01VT95TkAX-hqrTj&_nc_ht=scontent-sjc3-1.xx&oh=41affb2bd997c5367a6fc2edd82d3737&oe=5EB8A90E" alt=""/>
                {/* <img className="list-show-photo" src={this.props.list.photoUrls}alt=""/> */}
                {/* WOKRING. enable later when debugging list-show is complete */}
                <div className="photo_title">{this.props.list.name}</div>
              </div>
            </div>

            < BookingForm
             listing_name={this.props.list.name} 
                  // this necessary? cant seem to re-trigger error
             />

              {this.props.description}
            <div className="show-listing">
              <div className="section-overview">
                <div className="content-bottom">
                  <div className="details-container">{this.props.name}</div>
                  <p className="description">{this.props.description}</p>
                </div>

                <div className="row">
                  <div className="listed-by">{/* pic profile */}</div>
                  <div className="info-cards-wrapper">
                    <div className="info-cards"></div>
                    <div className="info-cards"></div>
                    <div className="info-cards"></div>
                  </div>
                </div>
              </div>

              <div className="feature-container"></div>
            </div>
              < ListMap className= "map" list={this.props.list} fetchListing={this.props.fetchListing} /> 
            {/* <div className="map" ref={(map) => (this.mapNode = map)}></div> */}
          </div>
        ); 

    }
}

ListShow.defaultProps = {
    list: {
    // photoUrls: "",
    price: "",
    // lat: "",
    // lng: "",
    // name: "",
    description: "",
    }
  }
  //use this.state possibly
  // convertl ocal props to local state
  // if you submit some kind of review, you want new review to pop up on submit, update local state
  // when you call this.setstate - react comp auto re-renders
  // update database as well
  // as you trigger setstate - submit data through dispatch - send it to ajax call - persist to databse

export default withRouter(ListShow)