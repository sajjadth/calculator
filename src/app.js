import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import Main from "./components/main";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
