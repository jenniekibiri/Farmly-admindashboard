import React, { createContext, useReducer } from "react";
import category from "./reducers/category";
import product from "./reducers/product";
import user from "./reducers/farmer";
import buyer from "./reducers/buyer";
import driver from "./reducers/driver";
import categoryInitialState from "./initialStates/categoryInitialState";
import productInitialState from "./initialStates/productInitialState";
import userInitialState from "./initialStates/userInitialState";
import buyerInitialState from "./initialStates/buyerInitialState";
import driverInitialState from "./initialStates/driverInitialState";
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
  const [buyerState, buyerDispatch] = useReducer(buyer, buyerInitialState);
  const [driverState, driverDispatch] = useReducer(driver, driverInitialState);
  return (
    <GlobalContext.Provider
      value={{
        categoryState,
        categoryDispatch,
        productState,
        productDispatch,
        userState,
        userDispatch,
        buyerState, buyerDispatch,
        driverState, driverDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
