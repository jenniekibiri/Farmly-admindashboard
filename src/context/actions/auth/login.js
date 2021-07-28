import axios from 'axios';
import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from "context/actions/actionTypes";
export default   ({ password, email })=>(dispatch) => {
    dispatch({type: LOGIN_LOADING});

axios.post('http://localhost:5000/api/login',{
      
      password,
      email,
})
   .then((response)=>{
       console.log(response)
    localStorage.token = response.data.token;
       dispatch({
           type: LOGIN_SUCCESS,
           payload:response.data
       })
   })
   .catch((error)=>{
       dispatch({
           type: LOGIN_ERROR,
           payload:{message:error}
       })
   });
}