import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import BookingForm from '../../bookings/booking_form_container';
import ReviewForm from '../../reviews/reviews_form';
import ListMap from './list_map';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ListShow = ({ match, fetchListing, list }) => {
  // const [hostName, setHostName] = useState("");
  // const [hostEmail, setEmail] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchListing(match.params.listingsId);
    // setHostName(list.host.name);
    // setEmail(list.host.email);
  }, []);
  
  return (
    <div className="show_body">
      <div className="social_share_target">
        <div className="photo_container">
          
          <Carousel
            centerMode={true}
            infiniteLoop={true}
            showThumbs={false}
            centerSlidePercentage={50}
            >
            {list.photoUrls ? list.photoUrls.map((photo) => 
              <img className="carousel_item" src={photo} key={photo} alt=""/>
              ): <>notworking</>  }
          </Carousel>

        </div>
        <div className="photo_title">{list.name}</div>
      </div>

      <div className="booking_limit">
        <div className="booking-comp">
          <BookingForm
            list={list}
            listing_name={list.name}
            host_id={list.host_id}
            fetchListing={fetchListing}
          />
        </div>

        <div className="show-listing">
          <div className="section-overview">
            <div className="list_overview">
              <img
                className="hostpic"
                src="https://supertramp-mast.s3-us-west-1.amazonaws.com/24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png"
                alt=""
              />
              <div className="host_by">
                Hosted By:
                <div className="host_name">{list.host.firstName} {list.host.lastName}</div>
                {/* <div className="host_name">Email: <a href={"mailto:" + list.host.email}>{list.host.email}</a></div> */}
              </div>

              <div className="details-container">
                <p className="description">{list.description}</p>
              </div>
            </div>
            {/*  */}
            <div className="area_essentials_ammenities">
              <div className="camp_area_list condition_list">
                <div className="aea_title">Camp Area</div>
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

            <div className="detail_list">
              <div className=" details_title">Details</div>
              <div className="details_text">
                <div>
                  <strong>Check in: </strong> After 2PM{" "}
                </div>
                <div>
                  <strong>Check out: </strong> Before 12PM
                </div>
                <div>
                  <strong>Cancellation policy: </strong>{" "}
                  {list.cancellation_policy}
                </div>
              </div>

              <div className="details_text">
                <div>
                  <strong>On Arrival: </strong> {list.on_arrival}{" "}
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

            <div className="reviews_container">
              {/* review index item */}
            </div>

            <div className="reviews_container">
              {/* review form */}
              <ReviewForm />
            </div>

          </div>
        </div>
        <ListMap className="map" listId={list.id} list={list} fetchListing={fetchListing} />
      </div>
    </div>
  );
};

ListShow.defaultProps = {
  list: {
    host: {},
    photoUrls : []
  },
};

export default withRouter(ListShow);