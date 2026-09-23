import React, { useEffect, useState, useRef } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import SearchIcon from '../icons/SearchIcon';
import LocationDot from '../icons/LocationDot';

const Search = (props) => {
    const inputRef = useRef(); //sets focus on search bar
    const [mapLocation, setMapLocation] = useState("");
    const [mapLat, setMapLat] = useState(null);
    const [mapLng, setMapLng] = useState(null);
    const history = useHistory();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    useEffect(() => {
        if (!inputRef.current || !window.google) return;
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current);

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) return;
    
            const lat = place.geometry.location.lat()
            const lng = place.geometry.location.lng()
            const label = place.formatted_address || place.name;
    
            setMapLocation(label);
            setMapLat(lat);
            setMapLng(lng);

            // //searches when selection made. do i keep this?
            // const state = {mapLocation: label, lat, lng}; 
            // props.receiveLocation(state);
            // history.push({
            //     pathname: `/search/${lat},${lng}`,
            //     state
            // })
        })
    }, [history, props])

    

    const handleInput = (e) => {
        e.preventDefault();
        setMapLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mapLat && mapLng) {
            const state = {
                mapLocation,
                lat: mapLat,
                lng: mapLng
            }
            props.receiveLocation(state);
            
            history.push({
                pathname: `/search/${mapLat},${mapLng}`,
                state: {mapLocation, mapLat, mapLng},
                search: `?label${encodeURIComponent(mapLocation)}` 
                    //adds extra info to search bar
            })
        } 
    }

    return (
        <form className="form_search" autocomplete="on" onSubmit={handleSubmit}>
            <div className="super-search">

                <div className="search-bar">
                    <span className="fasearch">
                        <LocationDot color="black" />
                    </span>

                    <input 
                        id="splash_search" 
                        className="search"
                        type="search" 
                        placeholder="Start with somewhere like Yosemite Valley!" 
                        ref={inputRef}
                        onChange={handleInput}
                        autoComplete="country-name"
                    />

                </div>
                
                <button className="search-button" type='submit'>
                    <SearchIcon />
                    <p className='margin-left-5'>Search</p>
                </button>
            </div>
        </form>
    ) 
};

export default withRouter(Search);