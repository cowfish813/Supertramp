import React, { useEffect } from 'react';

import SearchIcon from '../icons/SearchIcon';
import LocationDot from '../icons/LocationDot';
import { useSearchBar } from './useSearchBar';

const Search = () => {
    const { inputRef, mapLocation, handleInput, handleSubmit } = useSearchBar();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <form id="origin-search" className="form-search margin-bottom-5" autoComplete="on" onSubmit={handleSubmit}>
            <div className="super-search margin-top-3">

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
                        value={mapLocation}
                    />

                </div>
                
                <button className="search-button" type='submit'>
                    <SearchIcon className="search-icon"/>
                    <p className='margin-left-5'>Search</p>
                </button>
            </div>
        </form>
    ) 
};

export default Search;