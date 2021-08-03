// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    console.log(state)
    console.log(action.payload)
     switch (action.type) {
        
      
         case "REGISTER":
           return {
             ...state,
             newUser: {
 ...state.newUser,
 data:action.payload
                 
             },
           };
       default:
         return state;
     }
   };
   