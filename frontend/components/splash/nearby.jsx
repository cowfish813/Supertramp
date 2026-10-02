import React, { useEffect, useState } from "react";
import { getUserLocation } from '../util/geolocation';
import { useSelector, useDispatch } from "react-redux";
import { fetchNearbyListings } from "../../actions/listing_actions/listing_actions";
import { Link } from 'react-router-dom';
import ListingRow from "./listing_row";

const Nearby = ({scope, title, coords}) => {
    const EMPTY_LISTINGS = {};
    const nearbyListings = useSelector((state) => state.entities.nearbyListings[scope] || EMPTY_LISTINGS);
    const dispatch = useDispatch();
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        let cancelled = false;
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
                    setFetched(true);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setFetched(true);
                }
            })
        return () => { cancelled = true }
    }, [dispatch, scope, coords])

    const hasListings = Object.keys(nearbyListings).length > 0;
    if (fetched && !hasListings) return null;

    return (
        <ListingRow
            title={title || 'Listings Near You'}
            listings={nearbyListings}
        />
    )
}

export default Nearby;