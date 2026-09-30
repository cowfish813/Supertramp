import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { receiveLocation } from '../../actions/map_action';

export const useSearchBar = () => {
    const inputRef = useRef();
    const [mapLocation, setMapLocation] = useState('');
    const [mapLat, setMapLat] = useState(null);
    const [mapLng, setMapLng] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!inputRef.current || !window.google) return;
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current);

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) return;

            setMapLocation(place.formatted_address || place.name);
            setMapLat(place.geometry.location.lat);
            setMapLng(place.geometry.location.lng);
        });
    },[]);

    const handleSubmit = e => {
        e.preventDefault();
        if (!mapLat || !mapLng) return;

        const state = {mapLocation, lat: mapLat, lng: mapLng}
        dispatch(receiveLocation(state));

        history.push({
            pathname: `/search/${mapLat},${mapLng}`,
            state,
            search: `?label${encodeURIComponent(mapLocation)}`
        })
    }

    const handleInput = (e) => {
        setMapLocation(e.target.value);
    };

    return {
        inputRef,
        mapLocation,
        handleInput,
        handleSubmit
    };
};