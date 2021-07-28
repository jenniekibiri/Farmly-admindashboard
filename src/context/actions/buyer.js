import axios from 'axios';
import { BUYER_LOADING, BUYER_LOAD_ERROR, BUYER_LOAD_SUCCESS } from "context/actions/actionTypes";
export default (dispatch) => {
    dispatch({type: BUYER_LOADING});

axios.get('http://localhost:5000/api/buyers',{
    headers: {
        'Access-Control-Allow-Origin': '*',
      }
})
   .then((response)=>{
       dispatch({
           type: BUYER_LOAD_SUCCESS,
           payload:response
       })
   })
   .catch((error)=>{
       dispatch({
           tyepe: BUYER_LOAD_ERROR,
           payload:error
       })
   });
}