import React from "react";
import Buttons from "./buttons";
import Monitor from "./monitor";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
          <div
            className="d-flex flex-column justify-content-center align-items-center rounded"
            id="content"
          >
            <Monitor />
            <Buttons />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
