import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import itemReducer from './itemReducer';
import saleReducer from './saleReducer';

export default combineReducers({

errors : errorReducer,
item : itemReducer,
sale : saleReducer
});