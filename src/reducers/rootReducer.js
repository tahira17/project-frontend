import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import itemReducer from './itemReducer';
import salesReducer from './salesReducer';

export default combineReducers({

errors : errorReducer,
item : itemReducer,
sale : salesReducer
});