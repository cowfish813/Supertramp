import React from "react";
import { useSelector } from "react-redux";

const ErrorModal = () => {
    const EMPTY_ERRORS = [];
    const errors = useSelector(state => state.errors.session ?? EMPTY_ERRORS);

    return (
        errors.length ? 
        <ul key={errors.join('|')} className="feedback-indicator">
            {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
            :
        null
    )
};

export default ErrorModal;