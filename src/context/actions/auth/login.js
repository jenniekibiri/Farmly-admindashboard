import axios from 'axios';
import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from "context/actions/actionTypes";
export default   ({ password, email })=>(dispatch) => {
    dispatch({type: LOGIN_LOADING});

axios.post('http://localhost:5000/login',{
      
      password,
      email,
})
   .then((response)=>{
    localStorage.token = response.data.token;
       dispatch({
           type: LOGIN_SUCCESS,
           payload:response.data
       })
   })
   .catch((error)=>{
       dispatch({
           tyepe: LOGIN_ERROR,
           payload:error.response ? error.response.data : "COULD NOT CONNECT"
       })
   });
}