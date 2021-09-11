// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "DELETE_ORDER":
      return {
        ...state,
        orders: state.orders.filter(
          (orders) => orders._id !== action.payload.userId
        ),
      };
    case "GET_ORDERS":
      return {
        ...state,
        orders: [...action.payload],
      };
    default:
      return state;
  }
};
