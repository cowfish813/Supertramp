// import { applyMiddleware, createStore } from 'redux';
import {configureStore as rtkConfigureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/root_reducer';
// import thunk from "redux-thunk";
import logger from 'redux-logger';

const configureStore = (preloadedState ={}) =>
    rtkConfigureStore ({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    })


export default configureStore