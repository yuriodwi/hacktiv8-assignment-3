/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Experience from "../pages/experience";
import Skills from "../pages/skills";
import Interest from "../pages/interest";
import Awards from "../pages/awards";
import { AnimatePresence } from "framer-motion";
import { withRouter } from "react-router-dom";

class AnimRoutes extends Component {
  render() {
    const { location } = this.props; // Menggunakan this.props.location
    return (
      <AnimatePresence initial={true} mode="wait">
        <Switch key={location.pathname} location={location}>
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/interest" component={Interest} />
          <Route path="/awards" component={Awards} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    );
  }
}

export default withRouter(AnimRoutes); // Menggunakan withRouter
