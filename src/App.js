import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage";
import { Switch, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import BookOnline from "./Components/Pages/BookOnline";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import { BrowserRouter } from "react-router-dom";
import Home from "./Shopping/Home";
import Cart from "./Shopping/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/bookonline" component={BookOnline} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={Cart} />
            <Route path="/marchandise" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
