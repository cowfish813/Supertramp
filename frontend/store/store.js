// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '../reducers/root_reducer';
// import thunk from "redux-thunk";
// import logger from 'redux-logger';

// const configureStore = (preloadedState = {}) => 
//     createStore(
//         rootReducer, 
//         preloadedState, 
//         applyMiddleware(thunk, 
//         // logger
//         )
//         ); //add ,logger next to thunk for state/prevstate etc.

// export default configureStore

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configStore = configureStore({
    reducer: rootReducer,
    preloadedState: {},
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(thunk, 
            logger
        )
});

export default configStore;