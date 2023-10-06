import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Experience from "../pages/experience";
import Skills from "../pages/skills";
import Interest from "../pages/interest";
import Awards from "../pages/awards";

class AnimRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/interest" component={Interest} />
        <Route path="/awards" component={Awards} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default AnimRoutes;
