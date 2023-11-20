import React, { useEffect, useState, useRef } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    const inputRef = useRef();
    const [mapLocation, setMapLocation] = useState("");
    const [mapLat, setMapLat] = useState(37.74557009999999);
    const [mapLng, setMapLng] = useState(-119.5936038);
    const history = useHistory();

    useEffect(() => {
        inputRef.current.focus();
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
        });
    }

    useEffect(() => {
        const res = new google.maps.places.Autocomplete(inputRef.current);
            //attaches autocomplete to elementID
        res.addListener('place_changed', async () => {
            const address = await res.getPlace().formatted_address;
            const place = await res.getPlace();
            
            const lat = await place.geometry.location.lat();
            const lng = await place.geometry.location.lng();
            const mapRes = address ? address : place.name;

            setMapLocation(mapRes);
            setMapLat(lat);
            setMapLng(lng);

        });
    }, []);

    return (
        <form className="w-9/12 flex content-center justify-center" autocomplete="on">
            <div className="superSearch">

                <div className="searchBar">
                    <span className="fasearch">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>

                    <input 
                        id="splash_search" 
                        className="search"
                        type="search" 
                        placeholder="Start with somewhere like Yosemite Valley!" 
                        ref={inputRef}
                        onChange={handleInput}
                        autocomplete="on"
                    />

                </div>
                <button className="searchButton" onClick={handleSubmit}>Search</button>
            </div>
        </form>
    ) 
};

export default withRouter(Search);