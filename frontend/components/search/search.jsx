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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sb();

        const state = await {
            mapLocation,
            lat: mapLat,
            lng: mapLng
        }
        await props.receiveLocation(state);
        
        await history.push({
            pathname: `/search/${mapLat},${mapLng}`,
            state
        })
    }

    const sb = () => {
        const searchBox = new google.maps.places.SearchBox(inputRef.current);
        searchBox.addListener("places_changed", async () => {
            const place = searchBox.getPlaces()[0];
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            await setMapLat(lat);
            await setMapLng(lng);

            if (!lat || !lng) {
                const service = new google.maps.places.AutocompleteService();
                debugger;
                service.getQueryPredictions({ input: inputRef.current.value }, (predictions, status) => {
                    console.log(predictions);
                });
            }
        })
    }

    useEffect(() => {
        sb()
    }, [])

    return (
        <form className="form_search" autocomplete="on" onSubmit={handleSubmit}>
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