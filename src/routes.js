
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Icons from "views/examples/Icons.js";
import UsersTables from "views/examples/UsersTables";
import ProductTables from "views/examples/ProductTables";
import Categories  from "views/examples/Categories";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  
  {
    path: "/users-tables",
    name: "Users",
    icon: "fa fa-user-friends text-red",
    component:UsersTables ,
    layout: "/admin",
  },
  {
    path: "/products-tables",
    name: "Products",
    
    icon: "ni ni-cart text-red",
    component: ProductTables,
    layout: "/admin",
  },
  {
    path: "/category-tables",
    name: "Categories",
    icon: "ni ni-bullet-list-67 text-red",
    component: Categories,
    layout: "/admin",
  },
  {
    path: "/planroutes",
    name: "Plan routes",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
