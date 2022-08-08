import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./pages/Store";
import Error from "./pages/Error";
import Navigation from "./pages/Navigation";
import About from "./pages/About";
import FrenchHome from "./pages/FrenchHome";
import BeginStore from "./pages/Beginner";
import InterStore from "./pages/Intermediate";
import AdvStore from "./pages/Advanced";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/store" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/french" component={FrenchHome} />
            <Route path="/beginner" component={BeginStore} />
            <Route path="/intermediate" component={InterStore} />
            <Route path="/advanced" component={AdvStore} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
