import {
    
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
  } from "context/actions/actionTypes";
  
  const auth = (state, { payload, type }) => {
    console.log(state)
    switch (type) {
     
      case LOGIN_LOADING:
        return {
          ...state,
          auth: {
            ...state.auth,
            error: false,
            loading: true,
          },
        };
  
     
      case LOGIN_SUCCESS:
        return {
          ...state,
          auth: {
            ...state.auth,
            loading: false,
            data: payload,
          },
        };
  
      
      case LOGIN_ERROR:
        return {
          ...state,
          auth: {
            ...state.auth,
            loading: false,
            error: payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default auth;
  