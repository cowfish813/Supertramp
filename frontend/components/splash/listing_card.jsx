import React from "react";
import { Link } from "react-router-dom";

const ListingCard = ({ listing }) => {
    const lqPhotos = (listing.photoUrls || []).filter(url => {
        return url.endsWith('_thumb.webp')
    })

    return (
        <Link to={`listings/${listing.id}`}>
            <img
                className="vague-picture"
                src={lqPhotos[0]}
                alt={listing.name}
            />
                <div className="text-descriptor">
                    ${listing.price} for {listing.minimum_nights}{' '}
                    {listing.minimum_nights > 1 ? 'nights' : 'night'}
                </div>
            
        </Link>
    )
};

export default ListingCard;