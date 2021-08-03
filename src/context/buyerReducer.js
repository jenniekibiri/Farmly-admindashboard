// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    
    switch (action.type) {
       
        case "DELETE_BUYER":
            return {
              ...state,
              buyers: state.buyers.filter(
                (buyers) => buyers._id !== action.payload.userId
              ),
            };
        case "GET_BUYERS":
          return {
            ...state,
            buyers: [...action.payload, ...state.buyers],
          };
      default:
        return state;
    }
  };
  