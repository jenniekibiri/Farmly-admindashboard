import { USER_LOADING, USER_LOAD_ERROR, USER_LOAD_SUCCESS } from "context/actions/actionTypes";
  const user = (state, { payload, type }) => {
    switch (type) {
      case USER_LOADING: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: true,
          },
        };
      }
      case USER_LOAD_SUCCESS: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: false,
            data: payload,
          },
        };
      }
      case USER_LOAD_ERROR: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: false,
            error: payload,
          },
        };
      }
  
      default:
        return state;
        break;
    }
  };
  export default user;
  