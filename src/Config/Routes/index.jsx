import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import { About, Awards, Experience, Home, Interest, Skills } from "../../pages";

class Navbar extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="experience" element={<Experience />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="interest" element={<Interest />}></Route>
        <Route path="awards" element={<Awards />}></Route>
      </Routes>
    );
  }
}

export default Navbar;
