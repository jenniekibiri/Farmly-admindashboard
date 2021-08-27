import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import buyerReducer from "./buyerReducer";
import driverReducer from "./driverReducer";
import farmerReducer from "./farrmerReducer";
import loginReducer from "./loginReducer";
import orderReducer from "./orderReducer";
import productReducer from "./productReducer";
import registerReducer from "./registerReducer";

// Initial state
const categoryInitialState = {
  categories: [],
};
const orderInitialState = {
  orders: [],
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
const buyerInitialState = {
  buyers: [],
};
 const logInInitialState ={
   user:JSON.parse(localStorage.getItem("user"))  || [],
    }
 const registerInitialState ={
   newUser:[]
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
  const [orderState, orderDispatch] = useReducer(
    orderReducer,
    orderInitialState
  );
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    logInInitialState,
  );
  const [registerState, registerDispatch] = useReducer(
    registerReducer,
    registerInitialState,
  );
  const [buyerState, buyerDispatch] = useReducer(
   buyerReducer,
    buyerInitialState,
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
  function deleteBuyer(userId) {
    buyerDispatch({
      type: 'DELETE_BUYER',
      payload: {
        userId:userId
      }
    });
  }
  function deleteOrder(userId) {
    orderDispatch({
      type: 'DELETE_Order',
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
  } 
  function login(user) {
    loginDispatch({
      type: "LOGIN",
      payload: user,
    });
  }function register(newUser) {
    registerDispatch({
      type: "REGISTER",
      payload: newUser,
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
  function getBuyers(buyers){
    buyerDispatch({
      type:"GET_BUYERS",
      payload:buyers
    })
  }
  function getOrders(orders){
    orderDispatch({
      type:"GET_ORDERS",
      payload:orders
    })
  }
 
  return (
    <GlobalContext.Provider
      value={{
        categories: categoryState.categories,
        drivers: driverState.drivers,
        farmers:farmerState.farmers,
        user:loginState.user,
        newUser:registerState.newUser,
        products:productState.products,
        buyers:buyerState.buyers,
        orders:orderState.orders,
        getOrders,
        deleteOrder,
        getProducts,
        getBuyers,
        deleteProduct,
        deleteCategory,
        deleteBuyer,
        addCategory,
        getCategories,
        deleteFarmer,
        getDrivers,
        deleteDriver,
        getFarmers,
        register,
        login
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
