import React, { createContext, useReducer } from "react";
import category from "./reducers/category";
import categoryInitialState from "./initialStates/categoryInitialState";
export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [categoryState, categoryDispatch] = useReducer(
    category,
    categoryInitialState
  );
  return (
    <GlobalContext.Provider value={(categoryState, categoryDispatch)}>
      {children}
    </GlobalContext.Provider>
  );
};
