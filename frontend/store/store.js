// import { applyMiddleware, createStore } from 'redux';
import {configureStore as rtkConfigureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/root_reducer';
// import thunk from "redux-thunk";
import logger from 'redux-logger';

const configureStore = (preloadedState ={}) =>
    rtkConfigureStore ({
        reducer: rootReducer,
        preloadedState,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) => 
            process.env.NODE_ENV === 'production' ? getDefaultMiddleware() :
            getDefaultMiddleware().concat(logger),
    })


export default configureStore