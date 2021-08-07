// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
      switch (action.type) {
      case "DELETE_PRODUCT":
        return {
          ...state,
          products: state.products.filter(
            (product) => product._id !== action.payload.productId
          ),
        };
     
      case "GET_PRODUCTS":
      
        return {
          ...state,
          products: [...action.payload, ...state.products],
        };
      
      default:
        return state;
    }
  };
  