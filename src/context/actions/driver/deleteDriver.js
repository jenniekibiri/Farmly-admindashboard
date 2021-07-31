import {
    DELETE_DRIVER_LOADING,
    DELETE_DRIVER_ERROR,
    DELETE_DRIVER_SUCCESS,
  } from  "context/actions/actionTypes";
  import axios from 'axios';
  
  export default (userId) => (dispatch) => {
    dispatch({
      type: DELETE_DRIVER_LOADING,
      payload: userId,
    });
  
    axios
      .delete(`http://localhost:5000/api/user/${userId}`)
      .then((res) => {
        dispatch({
          type: DELETE_DRIVER_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        console.log("res.status", err.status);
        dispatch({
          type: DELETE_DRIVER_ERROR,
          payload: err.response ? err.response.data : "could not connect",
        });
      });
  };
  