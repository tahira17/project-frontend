import {GET_ITEMS, DELETE_ITEMS,GET_ITEM} from '../actions/types';


const initialState = {

    items : [],
    item : " "
}

export default function(state = initialState , action){
switch(action.type){
case GET_ITEMS:
return {...state, items:action.payload};
case DELETE_ITEMS:
    return {...state,items:state.items.filter(x=>x.id!==action.payload)}
    case GET_ITEM:
        return { ...state,item:action.payload};
    default:
    return state; 
}

}