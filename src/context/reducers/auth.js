import {
    
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_USER
  } from "context/actions/actionTypes";
  import authInitialState from "../initialStates/authInitialState";
  const auth = (state, { payload, type }) => {
   
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
  
        case LOGOUT_USER: {
          return {
            ...state,
            authInitialState,
          };
        }
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
  