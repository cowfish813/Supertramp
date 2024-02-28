import React, { useEffect, useState, useRef } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    const inputRef = useRef(); //sets focus on search bar
    const [mapLocation, setMapLocation] = useState("");
    const [mapLat, setMapLat] = useState();
    const [mapLng, setMapLng] = useState();
    const history = useHistory();

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, [])

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
                state
            })
        } else {
            //so this is preventing search form initiating at all...
            //search somehow incomplete because there was no selection for lat/lng to go to BE
            window.alert("No details available for input: '" + inputRef.current.value + ", select dropdown items'");
        //     const displaySuggestions = function (predictions, status) {
        //         if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
        //             alert(status);
        //             return;
        //         } else {
        //             console.log("ok")
        //         }

        //         predictions.forEach((prediction) => {
        //             console.log("display", prediction)
        //             debugger
        //         });
        //     };

        //     const service = new google.maps.places.AutocompleteService();
        //     service.getQueryPredictions({ input: inputRef.current.value }, displaySuggestions);
        }
    }

    useEffect(() => {
        const res = (new google.maps.places.Autocomplete(inputRef.current));
        res.addListener('place_changed', async () => {
            const address = await res.getPlace().formatted_address;
            const place = await res.getPlace();
            const lat = await place.geometry.location.lat();
            const lng = await place.geometry.location.lng();
            const mapRes = address ? address : place.name;
            setMapLocation(mapRes);
            setMapLat(lat);
            setMapLng(lng);
        }); //adds a listener on page load to reference point i designated.

//can i add a different type of listener at the same time that defaults a search?

    }, [])
    

    return (
        <form className="form_search" autocomplete="on">
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

//on the intial page load, i can push enter to search
    //result is undefined. how do i rememedy this? set up an if? 
    //maybe it's the map that doesnt load...
// after that, on listing index page, i have to push enter twice?