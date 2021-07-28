import { FARMER_LOADING, FARMER_LOAD_ERROR, FARMER_LOAD_SUCCESS } from "context/actions/actionTypes";
  const user = (state, { payload, type }) => {
    switch (type) {
      case FARMER_LOADING: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: true,
          },
        };
      }
      case FARMER_LOAD_SUCCESS: {
        return {
          ...state,
          user: {
            ...state.user,
            loading: false,
            data: payload,
          },
        };
      }
      case FARMER_LOAD_ERROR: {
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
  