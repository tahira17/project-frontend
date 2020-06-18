import {GET_SALES, GET_SALE, DELETE_SALES} from '../actions/types';


const initialState = {
    sales : [ ],
    sale : ' '
}

export default function(state = initialState , action){
    switch(action.type){

case GET_SALES:
    return { ...state, sales: action.payload };
    case GET_SALE:
      return{...state, sale: action.payload }
      case  DELETE_SALES:
        return { ...state, sales: state.sales.filter(x => x.id !== action.payload) }
   

        default:
    return state; 
}

}



