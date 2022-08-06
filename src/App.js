import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./pages/Store";
import Error from "./pages/Error";
import Navigation from "./pages/Navigation";
import About from "./pages/About";
import FrenchHome from "./pages/FrenchHome";
import Begin from "./pages/Beginner";
import Inter from "./pages/Intermediate";
import Adv from "./pages/Advanced";
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
            <Route path="/beginner" component={Begin} />
            <Route path="/intermediate" component={Inter} />
            <Route path="/advanced" component={Adv} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
