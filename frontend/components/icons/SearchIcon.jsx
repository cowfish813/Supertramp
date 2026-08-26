import React from 'react';

const SearchIcon = ({ className, color }) => (
    <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="3"/>
        <line x1="16.5" y1="16.5" x2="25" y2="25" stroke={color} strokeWidth="3.25" fill='currentColor' strokeLinecap="round"/>
    </svg>);

export default SearchIcon;