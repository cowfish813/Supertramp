import React from 'react';
import { useDispatch } from 'react-redux';
import { receiveLocation } from '../../actions/map_action';
import Search from './search';
import { useHistory } from 'react-router-dom';

const SearchContainer = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleReceiveLocation = (location) => {
        dispatch(receiveLocation(location));
    };

    return (
        <Search 
        receiveLocation={handleReceiveLocation}
        history={history} 
        {...props}
        />
    );
};

export default SearchContainer;