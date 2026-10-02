import React from 'react';
import ListingCard from './listing_card';
import ScrollContainer from 'react-indiana-drag-scroll';

const ListingRow = ({ title, listings }) => {
    return (
        <div className='vague-locations-container'>
            <h1 className='title-listing margin-left-7-9-15pc'>{title}</h1>

            <ScrollContainer 
                className='flex flex-row vague-tile-list margin-left-7-9-15pc'
                horizontal
                hideScrollbars={false}
                activationDistance={10}
            >
                {Object.values(listings || {}).map(listing => (
                  <ListingCard key={listing.id} listing={listing}/>  
                ))}
            </ScrollContainer>
        </div>
    )
};

export default ListingRow;