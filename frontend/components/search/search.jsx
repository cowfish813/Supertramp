import React, { useEffect, useState, useRef } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="3"/>
    <line x1="16.5" y1="16.5" x2="25" y2="25" stroke="white" strokeWidth="3.25" fill='currentColor' strokeLinecap="round"/>
  </svg>);

const LocationDot = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" stroke="black" strokeWidth="2"/>
    <circle cx="12" cy="9" r="2.5" stroke="black" strokeWidth="2"/>
  </svg>
);

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
                        <LocationDot/>
                        {/* <FontAwesomeIcon icon={faLocationDot} /> */}
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
                    <SearchIcon/>
                    <p className='margin-left-5'>Search</p>
                </button>
            </div>
        </form>
    ) 
};

export default withRouter(Search);