import { PRODUCT_LOADING,PRODUCT_LOAD_ERROR,PRODUCT_LOAD_SUCCESS } from "context/actions/actionTypes";
  const product = (state, { payload, type }) => {
    switch (type) {
      case PRODUCT_LOADING: {
        return {
          ...state,
          product: {
            ...state.product,
            loading: true,
          },
        };
      }
      case PRODUCT_LOAD_SUCCESS: {
        return {
          ...state,
          product: {
            ...state.product,
            loading: false,
            data: payload,
          },
        };
      }
      case PRODUCT_LOAD_ERROR: {
        return {
          ...state,
          product: {
            ...state.product,
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
  export default product;
  