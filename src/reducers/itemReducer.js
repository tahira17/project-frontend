import {GET_ITEMS, DELETE_ITEMS,GET_ITEM,GET_SALES, GET_SALE, DELETE_SALES} from '../actions/types';


const initialState = {

    items : [],
    item : ' ' ,
    sales : [],
    salee : ' '
}

export default function(state = initialState , action){
switch(action.type){
case GET_ITEMS:
return {...state, items:action.payload};
case DELETE_ITEMS:
    return {...state,items:state.items.filter(x=>x.id!==action.payload)}
    case GET_ITEM:
        return { ...state,item:action.payload};
        case GET_SALES:
            return { ...state, sales: action.payload };
            case GET_SALE:
              return{...state, salee: action.payload }
              case  DELETE_SALES:
                return { ...state, sales: state.sales.filter(x => x.id !== action.payload) }
           
        default:
    return state; 
}

}


