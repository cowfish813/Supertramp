import modalReducer from './modal_reducers/modal_reducer';
import errorModal from './modal_reducers/error_modal';
import { combineReducers } from 'redux';
import filterReducer from './filter_reducer';
import locationReducer from './location_reducer'


const uiReducer = combineReducers({
    modal: modalReducer,
    filter: filterReducer,
    location: locationReducer 
});

export default uiReducer;