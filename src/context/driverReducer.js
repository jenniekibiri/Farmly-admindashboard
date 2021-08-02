// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    console.log(action.payload)
    console.log(state.drivers)
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
            drivers: [...action.payload, ...state.drivers],
          };
      default:
        return state;
    }
  };
  