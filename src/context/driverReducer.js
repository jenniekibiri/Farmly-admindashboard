// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    
    switch (action.type) {
       
        case "DELETE_DRIVER":
            return {
              ...state,
              drivers: state.drivers.filter(
                (driver) => driver._id !== action.payload.userId
              ),
            };
        case "GET_DRIVERS":
          return {
            ...state,
            drivers: [...action.payload],
          };
      default:
        return state;
    }
  };
  