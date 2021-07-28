import React, { createContext, useReducer } from "react";
import category from "./reducers/category";
import product from "./reducers/product";
import user from "./reducers/farmer";
import categoryInitialState from "./initialStates/categoryInitialState";
import productInitialState from "./initialStates/productInitialState";
import userInitialState from "./initialStates/userInitialState";
export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [categoryState, categoryDispatch] = useReducer(
    category,
    categoryInitialState
  );
  const [productState, productDispatch] = useReducer(
    product,
    productInitialState
  );
  const [userState, userDispatch] = useReducer(user, userInitialState);
  return (
    <GlobalContext.Provider
      value={{
        categoryState,
        categoryDispatch,
        productState,
        productDispatch,
        userState,
        userDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
