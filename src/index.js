
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import { GlobalProvider } from "context/provider";
import { isAuthenticated } from "auth/auth";

ReactDOM.render(
  <GlobalProvider>
  <BrowserRouter>
    <Switch>
          
 <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/admin" render={(props) => 
      
      isAuthenticated() && isAuthenticated().user.role === 'admin' ? (
        <AdminLayout {...props} />
      ):(
<Redirect
to='/auth/login'
/>
      )
      
     } />

     
     
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>
  </GlobalProvider>,

  document.getElementById("root")
);
