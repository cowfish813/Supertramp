import React from 'react';
import { useSearchBar } from '../search/useSearchBar';
import SearchIcon from '../icons/SearchIcon';

const NavSearch = () => {
    const { mapLocation, handleInput, handleSubmit } = useSearchBar();

    return (
        <form className="NavSearchContainer" onSubmit={handleSubmit}>
            <span className="nav-fa-search">
                <SearchIcon className="small-icon-box" color='black'/>
            </span>
            <input type="search"
                id="nav-Search"
                className="navSearch"
                value={mapLocation}
                onChange={handleInput}
                placeholder="Lets start with Yosemite Valley!"
            />
            <button type="submit" className="navSearchBtn"></button>
        </form>
    )
};

export default NavSearch;