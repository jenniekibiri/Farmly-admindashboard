import {
    DELETE_DRIVER_LOADING,
    DELETE_DRIVER_ERROR,
    DELETE_DRIVER_SUCCESS,
  } from  "context/actions/actionTypes";
  
  
  export default (id) => (dispatch) => {
    dispatch({
      type: DELETE_DRIVER_LOADING,
      payload: id,
    });
  
    axios
      .delete(`/contacts/${id}`)
      .then((res) => {
        dispatch({
          type: DELETE_DRIVER_SUCCESS,
          payload: id,
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
  