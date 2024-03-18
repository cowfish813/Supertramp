import React, { useEffect, useState, useRef } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    const inputRef = useRef(); //sets focus on search bar
    const [mapLocation, setMapLocation] = useState("");
    const [mapLat, setMapLat] = useState();
    const [mapLng, setMapLng] = useState();
    const history = useHistory();

    useEffect(() => {
        // inputRef.current.focus();
    }, [])

    const handleInput = (e) => {
        e.preventDefault();
        setMapLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const state = {
            mapLocation,
            lat: mapLat,
            lng: mapLng
        }
        props.receiveLocation(state);
        
        history.push({
            pathname: `/search/${mapLat},${mapLng}`,
            state
        })
    }

    const sb = () => {
        const searchBox = new google.maps.places.SearchBox(inputRef.current);
        searchBox.addListener("places_changed", async () => {
            // const places = await searchBox.getPlaces();
            const place = await searchBox.getPlaces()[0];
            // debugger;
            // const address = place.formatted_address
            const lat = await place.geometry.location.lat();
            const lng = await place.geometry.location.lng();
            // const mapRes = address ? address : place.name;
            // debugger
            // setMapLocation(mapRes);
            setMapLat(lat);
            setMapLng(lng);
        })
    }

    useEffect(() => {
        sb()
    }, [])

    return (
        <form className="form_search" autocomplete="on">
            <div className="superSearch">

                <div className="searchBar">
                    <span className="fasearch">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>

                    <input 
                        id="splash_search" 
                        className="search"
                        type="search" 
                        placeholder="Start with somewhere like Yosemite Valley!" 
                        ref={inputRef}
                        onChange={handleInput}
                        // autocomplete="on"
                    />

                </div>
                
                <button className="searchButton" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faSearch} />
                    <p className='margin-left-5'>Search</p>
                </button>
            </div>
        </form>
    ) 
};

export default withRouter(Search);

//on the intial page load, i can push enter to search
    //result is undefined. how do i rememedy this? set up an if? 
    //maybe it's the map that doesnt load...
// after that, on listing index page, i have to push enter twice?