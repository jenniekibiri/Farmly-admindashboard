import axios from 'axios';
import {  ADD_CATEGORY_LOAD,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_ERROR, } from "context/actions/actionTypes";

export default   ({ categoryName,userId })=>(dispatch) => {
    dispatch({type: ADD_CATEGORY_LOAD});

axios.post(`http://localhost:5000/api/category/create/:${userId}`,{
      
      categoryName,
    
})
   .then((response)=>{
       console.log(response.data)
              dispatch({
           type: ADD_CATEGORY_SUCCESS,
           payload:response.data
       })
   })
   .catch((error)=>{
       dispatch({
           type: ADD_CATEGORY_ERROR,
           payload:{message:error}
       })
   });
}