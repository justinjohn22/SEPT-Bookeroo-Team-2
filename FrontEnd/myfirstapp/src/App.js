import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPerson from "./components/Persons/AddPerson";
import { Provider } from "react-redux";
import store from "./store";

import AdminLanding from "./components/Administration/AdminLanding";
import PendingBusinessApps from "./components/Administration/PendingBusinessApps";
import Landing from "./components/Layout/Landing";
import AboutUs from "./components/StaticPages/AboutUs";
import AllBooks from "./components/Books/AllBooks";

// import Register from "./components/UserManagement/Register";
// import Login from "./components/UserManagement/Login";
import LoginPage from "./components/StaticPages/LoginPage";
import RegisterPage from "./components/StaticPages/RegisterPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Footer />

            {
              //Public Routes
            }
            <Route exact path="/" component={Landing} />
            <Route exact path="/register.html" component={RegisterPage} />
            <Route exact path="/login.html" component={LoginPage} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/books" component={AllBooks} />

            {
              //Private Routes
            }
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addPerson" component={AddPerson} />
            <Route exact path="/adminlanding" component={AdminLanding} />
            <Route exact path="/pendingpublishers" component={PendingBusinessApps} />
           
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;