import UsersReport from "views/pages/productReports";
import Tickets from "views/pages/productReports";
import SalesReports from "views/pages/salesReports";
import UsersReports from "views/pages/usersReports";


var routes = [
  {
    path: "/sales-report",
    name: "sales",
    icon: "ni ni-spaceship text-green",
    component: SalesReports,
    layout: "/admin",
  },

  {
    path: "/users-report",
    name: "users",
    icon: "ni ni-single-02 text-red",
    component: UsersReports,
    layout: "/admin",
  },
  
  {
    path: "/products",
    name: "products",
    icon: "ni ni-single-02 text-red",
    component: UsersReport,
    layout: "/admin",
  },
];
export default routes;
