import React from 'react';
import ListMap from './list_map'
import { withRouter }from 'react-router-dom'
import BookingForm from '../../bookings/booking_form_container'


class ListShow extends React.Component {
    constructor(props) {
        super(props)    
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchListing(this.props.match.params.listingsId);
    }

    componentDidUpdate() {
      if (!(this.props.list)) {
        this.props.fetchListing(this.props.match.params.listingsId);
      }
    }

    render () {
        return (
          <div className="show_body">
            <div className="social_share_target">
              <div className="photo_square">
                <img className="list-show-photo" src={this.props.list.photoUrls}alt=""/>
                <div className="photo_title">{this.props.list.name}</div>
              </div>
            </div>

            <div className="booking-comp">
              < BookingForm
                list={this.props.list}
                listing_name={this.props.list.name}
                host_id={this.props.list.host_id}
                fetchListing={this.props.fetchListing}
              />
            </div>

            <div className="show-listing">
              <div className="section-overview">
                <img className="hostpic" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png" alt="" />
                <div className="host_by">Hosted By{}</div>
                <div className="details-container">
                  <h1>Summary:</h1>
                  <p className="description"> {this.props.list.description}</p>
                  <div className="detail_list onArrival"></div>
                  <div className="detail_list minNights"></div>
                </div>
              </div>
                {/* <div className="row">
                  <div className="listed-by">
                  </div>
                  <div className="info-cards-wrapper">
                    <div className="info-cards">Activities</div>
                    <div className="info-cards">Amenities</div>
                    <div className="info-cards"></div>
                  </div>
                </div> */}

              <div className="reviews_container">
                {/* review index item */}
              </div>

            </div>
              {/* <div className="feature-container"></div> */}
              < ListMap className="map" listId={this.props.list.id} list={this.props.list} fetchListing={this.props.fetchListing} /> 
              {/* ENABLE when listshow is done */}
          </div>
        ); 

    }
}


//bugs out without it, why?
ListShow.defaultProps = {
    list: {
    // photoUrls: "",
    // price: "",
    // lat: "",
    // lng: "",
    // name: "",
    // description: "",
    }
  }

export default withRouter(ListShow)