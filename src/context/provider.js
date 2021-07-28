import React, { createContext, useReducer } from "react";
import category from "./reducers/category";
import product from "./reducers/product";
import categoryInitialState from "./initialStates/categoryInitialState";
import productInitialState from "./initialStates/productInitialState";
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
  return (
    <GlobalContext.Provider value={{categoryState, categoryDispatch,
      productState, productDispatch
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
