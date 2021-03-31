import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: ["+", "-", "*", "/", ".", "="],
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
          <h1>hello world!</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
