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

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    
    const simulateArrowDown = () => {
        const event = new KeyboardEvent('keydown', { keyCode: 40 });
        inputRef.current.dispatchEvent(event);
    };

    const simulateEnter = () => {
        const event = new KeyboardEvent('keydown', { keyCode: 13 });  
        inputRef.current.dispatchEvent(event);
    }

    const handleInput = (e) => {
        e.preventDefault();
        setMapLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

//         if (!mapLat && !mapLng) {
//             sb()
//             // simulateArrowDown()
//             // simulateEnter()
// // how can this be cleaner? im basically using a keyboard to assign lat/lng        
//     //lat/lng assigned from search bar
//             //assigned after enter key but nothing if i pushed to state
//         }
        // autoCompletePlace()
            // does not trigger
        // sb();
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

    const autoCompletePlace = () => {
        const res = (new google.maps.places.Autocomplete(inputRef.current));
        res.addListener('place_changed', async () => {
            const address = await res.getPlace().formatted_address;
            const place = await res.getPlace();
            const lat = await place.geometry.location.lat();
            const lng = await place.geometry.location.lng();
            const mapRes = address ? address : place.name;
            // if (lat && lng && mapRes) {
            setMapLocation(mapRes);
            setMapLat(lat);
            setMapLng(lng);
            // }
        });

        
    }

    // useEffect(() => {
    //     autoCompletePlace();
    // }, [])
    

    const sb = () => {
        const searchBox = new google.maps.places.SearchBox(inputRef.current);
        searchBox.addListener("places_changed", async () => {
            const places = await searchBox.getPlaces();
            const place = await searchBox.getPlaces()[0];
            // debugger;
            // const address = place.formatted_address
            const lat = await place.geometry.location.lat();
            const lng = await place.geometry.location.lng();
            // const mapRes = address ? address : place.name;
            debugger
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