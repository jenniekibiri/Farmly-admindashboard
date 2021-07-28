import axios from 'axios';
import { DRIVER_LOADING, DRIVER_LOAD_ERROR, DRIVER_LOAD_SUCCESS } from "context/actions/actionTypes";
export default (dispatch) => {
    dispatch({type: DRIVER_LOADING});

axios.get('http://localhost:5000/api/drivers',{
    headers: {
        'Access-Control-Allow-Origin': '*',
      }
})
   .then((response)=>{
       dispatch({
           type: DRIVER_LOAD_SUCCESS,
           payload:response
       })
   })
   .catch((error)=>{
       dispatch({
           tyepe: DRIVER_LOAD_ERROR,
           payload:error
       })
   });
}