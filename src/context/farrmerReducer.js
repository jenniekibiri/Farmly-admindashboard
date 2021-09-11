// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
   
    switch (action.type) {
       
        case "DELETE_FARMER":
            return {
              ...state,
              farmers: state.farmers.filter(
                (farmer) => farmer._id !== action.payload.userId
              ),
            };
        case "GET_FARMERS":
          return {
            ...state,
            farmers: [...action.payload],
          };
      default:
        return state;
    }
  };
  