// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== action.payload.categoryId
        ),
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [action.payload, ...state.categories],
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: [...action.payload, ...state.categories],
      };
    
    default:
      return state;
  }
};
