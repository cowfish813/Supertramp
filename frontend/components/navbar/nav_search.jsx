import React, { useEffect } from 'react';
import { useSearchBar } from '../search/useSearchBar';
import SearchIcon from '../icons/SearchIcon';

const NavSearch = () => {
    const { inputRef, mapLocation, handleInput, handleSubmit } = useSearchBar();
    
    useEffect(() => {
        inputRef.current?.focus();
    }, [inputRef])

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
            ref={inputRef}
            />
            <button type="submit" className="navSearchBtn"></button>
        </form>
    )
}

export default NavSearch;