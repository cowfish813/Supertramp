import React, { useEffect, useState } from "react";
import { getUserLocation } from '../util/geolocation';
import { useSelector, useDispatch } from "react-redux";
// import { fetchNearbyListings } from "../../util/listing_api_util";
import { fetchNearbyListings } from "../../actions/listing_actions/listing_actions";

import { Link } from 'react-router-dom';

const Nearby = () => {
    const nearbyListings = useSelector((state) => state.entities.nearbyListings);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const DEFAULT_COORDS = { latitude: 37.7456, longitude: -119.5936 };

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        if (fetchNearbyListings) {
            getUserLocation()
                .then((coords) => {
                    // dispatch(fetchNearbyListings(coords.lat, coords.lng, 50))
                    dispatch(fetchNearbyListings(DEFAULT_COORDS.latitude, DEFAULT_COORDS.longitude, 50))
                })
                .then(() => {
                    if (!cancelled) setLoading(false)
                })
                .catch(err => {
                    if (!cancelled) {
                        setErr(err.mesage || "Could not load nearby listings");
                        setLoading(false);
                    }
                    // console.warn("Location denied or unavailable:", err)
                });
        }
        console.log(nearbyListings, "nearby")
        return () => { cancelled = true }
    }, [dispatch])

    return (
        <div className="vague-locations-container">
            <h1 className="title-listing margin-left-7-9-15pc">Listings Near You</h1>
            <div className="flex flex-row vague-tile-list margin-left-7-9-15pc">
                {Object.values(nearbyListings || {}).map(listing => (
                    <Link key={listing.id} to={`/listings/${listing.id}`}>
                        <img
                            className="vague-picture"
                            src={listing.photoUrls?.[0]}
                            alt={listing.name}
                        />
                        <div className='text-descriptor'>${listing.price} for {listing.minimum_nights} {listing.minimum_nights > 1 ? "nights" : "night"}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Nearby;