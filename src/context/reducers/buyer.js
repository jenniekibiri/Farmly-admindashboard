import { BUYER_LOADING, BUYER_LOAD_ERROR, BUYER_LOAD_SUCCESS } from "context/actions/actionTypes";
  const user = (state, { payload, type }) => {
    switch (type) {
      case BUYER_LOADING: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: true,
          },
        };
      }
      case BUYER_LOAD_SUCCESS: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: false,
            data: payload,
          },
        };
      }
      case BUYER_LOAD_ERROR: {
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
  