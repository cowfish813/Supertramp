import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const EMPTY_ERRORS = [];

const ErrorModal = () => {
    const errors = useSelector(state => state.errors.session) ?? EMPTY_ERRORS;
    const ulRef = useRef(null);
    const prevErrorRef = useRef(errors);
    
    useEffect(() => {
        if (prevErrorRef.current !== errors && errors.length && ulRef.current) {
            const el = ulRef.current;
            el.classList.remove('feedback-indicator--animate');
            void el.offsetWidth;
            el.classList.add('feedback-indicator--animate')
        }
        prevErrorRef.current = errors;
    }, [errors])

    return (
        errors.length ? 
        < ul 
            ref={ulRef} 
            key={errors.join('|')} 
            className="feedback-indicator">
            {errors.map((error, i) => 
                <li key={i}>{error}</li>)}
        </ul>
            :
        null
    )
};

export default ErrorModal;