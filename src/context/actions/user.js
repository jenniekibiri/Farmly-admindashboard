import axios from 'axios';
import { USER_LOADING, USER_LOAD_ERROR, USER_LOAD_SUCCESS } from "context/actions/actionTypes";
export default (dispatch) => {
    dispatch({type: USER_LOADING});

axios.get('http://localhost:5000/api/users',{
    headers: {
        'Access-Control-Allow-Origin': '*',
      }
})
   .then((response)=>{
       dispatch({
           type: USER_LOAD_SUCCESS,
           payload:response
       })
   })
   .catch((error)=>{
       dispatch({
           tyepe: USER_LOAD_ERROR,
           payload:error
       })
   });
}