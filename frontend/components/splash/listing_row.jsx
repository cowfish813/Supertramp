import React from 'react';
import ListingCard from './listing_card';

const ListingRow = ({ title, listings }) => {
    return (
        <div className='vague-locations-container'>
            <h1 className='title-listing margin-left-7-9-15pc'>{title}</h1>
            <div className='flex flex-row vague-tile-list margin-left-7-9-15pc'>
                {Object.values(listings || {}).map(listing => (
                  <ListingCard key={listing.id} listing={listing}/>  
                ))}
            </div>
        </div>
    )
};

export default ListingRow;