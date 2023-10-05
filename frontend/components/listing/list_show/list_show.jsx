import React from 'react';
import ListMap from './list_map'
import { withRouter }from 'react-router-dom'
import BookingForm from '../../bookings/booking_form_container'
// import ReviewIndex from '../../reviews/review_index'
import ReviewForm from '../../reviews/reviews_form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from '@fortawesome/free-brands-svg-icons';


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
                <img
                  className="list-show-photo"
                  src={this.props.list.photoUrls}
                  alt=""
                />
              </div>
              <div className="photo_title">{this.props.list.name}</div>
            </div>


            <div className="booking_limit">

              <div className="booking-comp">
                <BookingForm
                  list={this.props.list}
                  listing_name={this.props.list.name}
                  host_id={this.props.list.host_id}
                  fetchListing={this.props.fetchListing}
                />
              </div>
              <div className="show-listing">
                <div className="section-overview">

                  <div className="list_overview">
                    <img className="hostpic" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png" alt="" />
                    <div className="host_by">
                      Hosted By:
                      <div className="host_name">Nick C.</div>
                    </div>

                    <div className="details-container">
                      <p className="description"> {this.props.list.description}</p>
                    </div>
                  </div>

                  <div className="area_essentials_ammenities">
                    <div className="camp_area_list condition_list">
                      <div className="aea_title">Camp Area</div>
                      {/* <div className="aea_info">
                        <img className="aea_conditions" src="" alt=""/>
                      </div> */}
                      <div className="aea_info">
                        <img className="aea_conditions" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/tent2.png" alt="" />
                        <p>Bring your own Tent</p>
                      </div>
                      <div className="aea_info">
                        <img className="aea_conditions" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/parking1-512.png" alt="" />
                        <p>Parking at or near listing</p>
                      </div>
                    </div>
                    <div className="essentials_list condition_list">
                      <div className="aea_title">Essentials</div>                  
                      <div className="aea_info">
                        <img className="aea_conditions" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/toilet.png" alt="" />
                        <p>Available</p>
                      </div>
                      <div className="aea_info">
                        <img className="aea_conditions" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/bonfire.png" alt="" />
                        <p>Allowed</p>
                      </div>
                    </div>
                    <div className="amenities_list condition_list">
                      <div className="aea_title">Ammenities</div>
                      <div className="aea_info">
                        <img className="aea_conditions" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/water.png" alt="" />
                        <p>Potable Water</p>
                      </div>
                      <div className="aea_info">
                        <img className="aea_conditions" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/5593_-_No_Wifi-512.png" alt="" />
                        <p>No WiFi</p>
                      </div>
                      <div className="aea_info">
                        <img className="aea_conditions" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/nowater.png" alt="" />
                        <p>No Showers</p>
                      </div>
                      <div className="aea_info">
                        <img className="aea_conditions" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/pacout.png" alt="" />
                        <p>Pack out Waste</p>
                      </div>

                    </div>

                  </div>
                </div>
                <div className="detail_list" id="details_sum_list">
                  <div className="details_text" className="detail_sum_list">Details</div>
                  <div className="details_text">
                    <div>
                      <strong>Check in: </strong> After 2PM{" "}
                    </div>
                    <div>
                      <strong>Check out: </strong> Before 12PM
                    </div>
                    <div>
                      <strong>Cancellation policy: </strong>{" "}
                      {this.props.list.cancellation_policy}
                    </div>
                  </div>

                  <div className="details_text">
                    <div>
                      <strong>On Arrival: </strong> {this.props.list.on_arrival}{" "}
                    </div>
                    <div>
                      <strong>Minimum nights: </strong> 1 night
                    </div>
                    <div>
                      <strong> Weekend discount: </strong> None{" "}
                    </div>
                  </div>
                </div>

                <div className="detail_list" id="list-offset">
                  <div className="details_title">Terrain</div>
                  <div className="img_Detail">
                    <img
                      className="detail_img"
                      src="https://supertramp-mast.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+1.05.38+AM.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="detail_list">
                  <div className="details_title" id="img_offset">Activities</div>

                  <div className="img_Detail">
                    <img
                      className="detail_img"
                      src="https://supertramp-mast.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+1.03.40+AM.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="reviews_container">{/* review index item */}</div>
                <div className="reviews_container">{/* review form */}
                  < ReviewForm/>
                </div>
              </div>
            </div>
            <ListMap
              className="map"
              listId={this.props.list.id}
              list={this.props.list}
              fetchListing={this.props.fetchListing}
            />
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