import {contactReducer} from './contactreducer';
import {combineReducers} from 'redux';
 


export default combineReducers({
    contact:contactReducer,
})