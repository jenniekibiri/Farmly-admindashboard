import axios from 'axios';
import { FARMER_LOADING, FARMER_LOAD_ERROR, FARMER_LOAD_SUCCESS } from "context/actions/actionTypes";
export default (dispatch) => {
    dispatch({type: FARMER_LOADING});

axios.get('http://localhost:5000/api/farmers',{
    headers: {
        'Access-Control-Allow-Origin': '*',
      }
})
   .then((response)=>{
       dispatch({
           type: FARMER_LOAD_SUCCESS,
           payload:response
       })
   })
   .catch((error)=>{
       dispatch({
           tyepe: FARMER_LOAD_ERROR,
           payload:error
       })
   });
}