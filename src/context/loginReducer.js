// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
   
    switch (action.type) {
       
     
        case "LOGIN":
          return {
            ...state,
            user: {
...state.user,
data:action.payload.user
                
            },
          
          };
      default:
        return state;
    }
  };
  