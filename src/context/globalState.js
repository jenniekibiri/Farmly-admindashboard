import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import driverReducer from "./driverReducer";
import farmerReducer from "./farrmerReducer";
import loginReducer from "./loginReducer";
import productReducer from "./productReducer";

// Initial state
const categoryInitialState = {
  categories: [],
};
const driverInitialState = {
  drivers: [],
};
const farmerInitialState = {
  farmers: [],
};
const productInitialState = {
  products: [],
};
 const logInInitialState ={
   user:JSON.parse(localStorage.getItem("user"))  || []
 }
// Create context
export const GlobalContext = createContext({});

// Provider component
export const GlobalProvider = ({ children }) => {
  const [categoryState, categoryDispatch] = useReducer(
    AppReducer,
    categoryInitialState
  );
  const [driverState, driverDispatch] = useReducer(
    driverReducer,
    driverInitialState
  );
  const [farmerState, farmerDispatch] = useReducer(
    farmerReducer,
    farmerInitialState
  );
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    logInInitialState,
  );

  

  // Actions
  function deleteCategory(categoryId) {
    categoryDispatch({
      type: "DELETE_CATEGORY",
      payload: {
        //   userId:id,
        categoryId: categoryId,
        //   token:token
      },
    });
  }
  function deleteProduct(productId) {
    productDispatch({
      type: "DELETE_PRODUCT",
      payload: {
        //   userId:id,
        productId: productId,
        //   token:token
      },
    });
  }
  function deleteDriver(userId) {
    driverDispatch({
      type: 'DELETE_DRIVER',
      payload: {
        userId:userId
      }
    });
  }
  function deleteFarmer(userId) {
    farmerDispatch({
      type: 'DELETE_FARMER',
      payload: {
        userId:userId
      }
    });
  }
  function addCategory(category) {
    categoryDispatch({
      type: "ADD_CATEGORY",
      payload: category,
    });
  } function login(user) {
    loginDispatch({
      type: "LOGIN",
      payload: user,
    });
  }
  function getCategories(categories) {
    categoryDispatch({
      type: "GET_CATEGORIES",
      payload: categories,
    });
  }
  function getDrivers(categories) {
    driverDispatch({
      type: "GET_DRIVERS",
      payload: categories,
    });
  }
  function getFarmers(farmers) {
    farmerDispatch({
      type: "GET_FARMERS",
      payload: farmers,
    });
  }
  function getProducts(products) {
    productDispatch({
      type: "GET_PRODUCTS",
      payload: products,
    });
  }
 
  return (
    <GlobalContext.Provider
      value={{
        categories: categoryState.categories,
        drivers: driverState.drivers,
        farmers:farmerState.farmers,
        user:loginState.user,
        products:productState.products,
        profile:
        getProducts,
        deleteProduct,
        deleteCategory,
        addCategory,
        getCategories,
        deleteFarmer,
        getDrivers,
        deleteDriver,
        getFarmers,
        login
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
