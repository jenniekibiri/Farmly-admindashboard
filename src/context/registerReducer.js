// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
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
   