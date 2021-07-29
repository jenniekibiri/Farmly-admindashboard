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
];
export default routes;
