import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchListing } from '../../../actions/listing_actions/listing_actions';
import { requestUser } from '../../../actions/user_actions';
import ListShow from './list_show';

const ListShowContainer = () => {
    const { listingsId, usersId } = useParams();
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.entities.users[state.session.currentUser]);
    const list = useSelector((state) => state.entities.listings[listingsId]);
    const hostUser = useSelector((state) => state.entities.users[usersId]);

    useEffect(() => {
        dispatch(fetchListing(listingsId));
        dispatch(requestUser(usersId));
    }, [dispatch, listingsId, usersId]);

    return (
        <ListShow
        currentUser={currentUser}
        list={list}
        hostUser={hostUser}
        fetchListing={(listing) => dispatch(fetchListing(listing))}
        fetchHost={(booking_hostId) => dispatch(requestUser(booking_hostId))}
        />
    );
};

export default ListShowContainer;