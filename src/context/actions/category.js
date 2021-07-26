import axios from 'axios';

export default (dispatch) => {
    dispatch({type:CATEGORY_LOADING});

axios.get('http://localhost:5000/api/categories')
   .then((response)=>{
       dispatch({
           type:CATEGORY_LOAD_SUCCESS,
           payload:response
       })
   })
   .catch((error)=>{
       dispatch({
           tyepe:CATEGORY_LOAD_ERROR,
           payload:error
       })
   });
}