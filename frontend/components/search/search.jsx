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
            simulateArrowDown()
            simulateEnter()
            simulateEnter()            
        }
    }

    const autoCompletePlace = () => {
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
        });
    }

    useEffect(() => {
        autoCompletePlace();
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
                        autoComplete="country-name"
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