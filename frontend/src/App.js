/* eslint-disable */
import React from "react";
//Styles
import "./assets/css/styles.css";

// React router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Navbar
import Header from "./components/layout/Header";
import AdminHeader from "./components/layout/AdminHeader";
import SideBar from "./components/layout/SideBar";

//Public Pages
import Home from "./components/pages/public/Home";
import About from "./components/pages/public/About";
import Login from "./components/pages/public/Login";
import Register from "./components/pages/public/Register";
import MyCompliants from "./components/pages/public/Complaints";

//Admin Dashboard
import AdminHome from "./components/pages/admin/Home";
import AdminLogin from "./components/pages/admin/Login";
import AdminRegister from "./components/pages/admin/Register";
import Complaints from "./components/pages/admin/Complaints";

const PublicLayout = ({ exact, path, component: Component, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            {/* Include public navbar on all pages */}
            <Header {...routeProps} />
            <div className="container">
              <Component {...routeProps} />
            </div>
          </>
        );
      }}
    />
  );
};
const AdminLayout = ({ exact, path, component: Component, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            {/* Include admin navbar on all pages */}
            <AdminHeader {...routeProps} />
            <SideBar {...routeProps} />
            <div className="my-container">
              <div className="container">
                <Component {...routeProps} />
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

function App() {
  return (
    <Router>
      <Switch>
        {/* Public Routes */}
        <PublicLayout exact path="/" component={Home} />
        <PublicLayout exact path="/about" component={About} />
        <PublicLayout exact path="/login" component={Login} />
        <PublicLayout exact path="/register" component={Register} />
        <PublicLayout exact path="/complaints" component={MyCompliants} />
        <PublicLayout exact path="/complaints" component={MyCompliants} />
        {/* Admin Routes */}
        <AdminLayout exact path="/admin" component={AdminHome} />
        <AdminLayout exact path="/admin/login" component={AdminLogin} />
        <AdminLayout exact path="/admin/register" component={AdminRegister} />
        <AdminLayout exact path="/admin/complaints" component={Complaints} />
      </Switch>
    </Router>
  );
}

export default App;
