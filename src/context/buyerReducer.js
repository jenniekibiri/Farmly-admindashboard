// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    console.log(action.payload)
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
            buyers: [...action.payload],
          };
      default:
        return state;
    }
  };
  



  