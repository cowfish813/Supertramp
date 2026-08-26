
import React from 'react';

const LocationDot = ({ className, color }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" stroke={color} strokeWidth="2"/>
        <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="2"/>
    </svg>
);

export default LocationDot;