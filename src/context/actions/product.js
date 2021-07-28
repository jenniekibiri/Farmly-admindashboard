import axios from 'axios';
import { PRODUCT_LOADING,PRODUCT_LOAD_ERROR,PRODUCT_LOAD_SUCCESS } from "context/actions/actionTypes";
export default (dispatch) => {
    dispatch({type:PRODUCT_LOADING});

axios.get('http://localhost:5000/api/products',{
    headers: {
        'Access-Control-Allow-Origin': '*',
      }
})
   .then((response)=>{
       dispatch({
           type:PRODUCT_LOAD_SUCCESS,
           payload:response
       })
   })
   .catch((error)=>{
       dispatch({
           tyepe:PRODUCT_LOAD_ERROR,
           payload:error
       })
   });
}