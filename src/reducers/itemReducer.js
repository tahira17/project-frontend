import {GET_ITEMS, DELETE_ITEMS} from '../actions/types';


const initialState = {

    items : []
}

export default function(state = initialState , action){
switch(action.type){
case GET_ITEMS:
return {...state, items:action.payload};
case DELETE_ITEMS:
    return {...state,items:state.items.filter(x=>x.id!==action.payload)}
default:
    return state; 
}

}