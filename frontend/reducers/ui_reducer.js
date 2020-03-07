import modalReducer from './modal_reducers/modal_reducer'
import errorModal from './modal_reducers/error_modal'
import { combineReducers } from 'redux'


const uiReducer = combineReducers({
    modal: modalReducer,
})

export default uiReducer