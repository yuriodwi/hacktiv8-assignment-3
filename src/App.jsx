import { Component } from "react";
import AnimRoutes from "./Components/AnimRoutes";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AnimRoutes />;
      </div>
    );
  }
}

export default App;
