import axios from 'axios';
import {  ADD_CATEGORY_LOAD,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_ERROR, } from "context/actions/actionTypes";

export default   ({ 
    category,
    categoryName:categoryName
})=>(dispatch) => {
    dispatch({type: ADD_CATEGORY_LOAD});
console.log('this is category',categoryName)
axios.post(`http://localhost:5000/api/category/create`,{
      
      categoryName:category.categoryName,
     
    //   Authorization: `Bearer ${token}`,
    
})
   .then((response)=>{
    console.log(response)
       console.log(response.data)
              dispatch({
           type: ADD_CATEGORY_SUCCESS,
           payload:response.data
       })
   })
   .catch((error)=>{
       console.log(error)
       dispatch({
           type: ADD_CATEGORY_ERROR,
           payload:{message:error}
       })
   });
}