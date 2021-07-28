import { DRIVER_LOADING, DRIVER_LOAD_ERROR, DRIVER_LOAD_SUCCESS } from "context/actions/actionTypes";
  const user = (state, { payload, type }) => {
    switch (type) {
      case DRIVER_LOADING: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: true,
          },
        };
      }
      case DRIVER_LOAD_SUCCESS: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: false,
            data: payload,
          },
        };
      }
      case DRIVER_LOAD_ERROR: {
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
  