import axios from 'axios'
import {GET_ERRORS, GET_ITEMS,DELETE_ITEMS,GET_ITEM} from './types'

export const additem = ( newitem, history) => async dispath => {
   await axios.post('http://localhost:8081/item',newitem)
.then((res)=>{
    history.push('/inventory')

}).catch((err)=>{
   dispath({type : GET_ERRORS,payload:err.response.data})
})
}

export const getitems = ( ) => async dispath => {
    await axios.get('http://localhost:8081/item')
 .then((res)=>{
    
    dispath ({type:GET_ITEMS,payload:res.data})

})
 }

 export const deleteitems = (id) => async dispath => {
   await axios.delete(`http://localhost:8081/item/${id}` )
.then((res)=>{
   
   dispath ({type:DELETE_ITEMS,payload:id})

})
}

export const getitem = (id) => async dispath => {
   await axios.get('http://localhost:8081/item/' +id)
.then((res)=>{
   
   dispath ({type:GET_ITEM,payload:res.data})

})
}


export const updateitem = (id,updateditem,history) => async dispath => {
   await axios.put('http://localhost:8081/item/' +id, updateditem)
.then((res)=>{
   
   history.push('/inventory')

}).catch((err)=>{
   dispath({type : GET_ERRORS,payload:err.response.data})
})
}