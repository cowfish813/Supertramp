import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import BookingForm from '../../bookings/booking_form_container';
import ReviewForm from '../../reviews/reviews_form';
import ListMap from './list_map';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ListShow = ({ match, fetchListing, hostUser, list = {photoUrls: [],host: {firstName:"",lastName:""}} }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchListing(match.params.listingsId);
  }, []);
  
  return (
    <div className="show_body">
      <div className="social_share_target">
        <div className="photo_container">
          
          <Carousel
            centerMode={true}
            infiniteLoop={true}
            showThumbs={false}
            centerSlidePercentage={45}
            >
            {list.photoUrls.map((photo) => 
              <img className="carousel_item" src={photo} key={photo} alt=""/>
              )}
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
                <div className="host_name">{list && list.host ? list.host.firstName + " " + list.host.lastName : ""}</div>
              </div>

              <div className="details-container">
                <p className="description">{list.description}</p>
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

export default withRouter(ListShow);