import axios from 'axios'
import {GET_ERRORS, GET_ITEMS,DELETE_ITEMS,GET_ITEM,GET_SALES,DELETE_SALES, GET_SALE} from './types'

export const additem = ( newitem, history) => async dispath => {
   await axios.post('/item',newitem)
.then((res)=>{
    history.push('/inventory')

}).catch((err)=>{
   dispath({type : GET_ERRORS,payload:err.response.data})
})
}

export const getitems = ( ) => async dispath => {
    await axios.get('/item')
 .then((res)=>{
    
    dispath ({type:GET_ITEMS,payload:res.data})

})
 }

 export const deleteitems = (id) => async dispath => {
   await axios.delete(`/item/${id}` )
.then((res)=>{
   dispath ({type:DELETE_ITEMS,payload:id})
})
}

export const getitem = (id) => async dispath => {
   await axios.get('/item/' +id)
.then((res)=>{
   
   dispath ({type:GET_ITEM,payload:res.data})

})
}


export const updateitem = (id,updateditem,history) => async dispath => {
   await axios.put('/item/' +id, updateditem)
.then((res)=>{
   history.push('/inventory')

}).catch((err)=>{
   dispath({type : GET_ERRORS,payload:err.response.data})
})
}

//SALESS


export const createsale = ( newsale, history) => async dispath => {

   await axios.post('/sales',newsale)
.then((res)=>{
    history.push('/sale')

}).catch((err)=>{
   dispath({type : GET_ERRORS,payload:err.response.data})
})
}


export const getsales = ( ) => async dispath => {
  
   await axios.get('/sales')
.then((res)=>{

   dispath ({type:GET_SALES,payload:res.data})
   
})
}

export const deletesale = (id) => async dispath => {
  await axios.delete(`/sales/${id}` )
.then((res)=>{
  
  dispath ({type:DELETE_SALES,payload:id})

})
}

export const getsale = (id) => async dispath => {
  await axios.get('/sales/' +id)
.then((res)=>{
  
  dispath ({type:GET_SALE,payload:res.data})

})
}


export const editsale = (id,updatedsale,history) => async dispath => {
  await axios.put(`/sales/${id}`, updatedsale)

.then((res)=>{
  history.push('/sale')
}).catch((err)=>{
  dispath({type : GET_ERRORS,payload:err.response.data})
})
}