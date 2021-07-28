
import Index from "views/Index.js";
import Profile from "views/pages/Profile.js";
import Maps from "views/pages/Maps.js";
import Register from "views/pages/Register.js";
import Login from "views/pages/Login.js";
import Icons from "views/pages/Icons.js";

import ProductTables from "views/pages/ProductTables";
import Categories  from "views/pages/Categories";
import Drivers from "views/pages/Drivers";
import Buyers from "views/pages/Buyers";
import Farmers from "views/pages/Farmers";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
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
    path: "/farmers-tables",
    name: "Farmers",
    icon: "fa fa-user-friends text-red",
    component:Farmers,
    layout: "/admin",
  },
  
  {
    path: "/buyers-tables",
    name: "Buyers",
    icon: "fa fa-user-tag text-red",
    component:Buyers ,
    layout: "/admin",
  },
  
  {
    path: "/drivers-tables",
    name: "Drivers",
    icon: "fa fa-truck text-red",
    component:Drivers ,
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

];
export default routes;
