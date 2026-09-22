import React, { useEffect, useState } from "react";
import { getUserLocation } from '../util/geolocation';
import { useSelector, useDispatch } from "react-redux";
import { fetchNearbyListings } from "../../actions/listing_actions/listing_actions";
import { Link } from 'react-router-dom';

const Nearby = ({scope, title, coords}) => {
    const nearbyListings = useSelector((state) => state.entities.nearbyListings[scope] || {});
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);

    const DEFAULT_COORDS = { 
        latitude: coords?.lat, 
        longitude: coords?.lng 
    };

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        const resolveCoords = coords ? Promise.resolve(coords) : getUserLocation()

        resolveCoords   
            .then((c) => {
                if (cancelled) return;
                const lat = c.lat ?? c.latitude;
                const lng = c.lng ?? c.longitude;
                return dispatch(fetchNearbyListings(lat, lng, 50, scope));
            })
            .then(() => {
                if (!cancelled) {
                    setLoading(false); 
                    setFetched(true);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setLoading(false);
                    setFetched(true);
                }
            })
        return () => { cancelled = true }
    }, [dispatch, scope, coords])

    const hasListings = Object.keys(nearbyListings).length > 0;
    if (fetched && !hasListings) return null;

    return (
        <div className="vague-locations-container">
            <h1 className="title-listing margin-left-7-9-15pc">{ title || "Listings Near You"}</h1>
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