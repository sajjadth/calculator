import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import Buttons from "./components/buttons";
import Monitor from "./components/monitor";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
          <Monitor />
          <Buttons />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
