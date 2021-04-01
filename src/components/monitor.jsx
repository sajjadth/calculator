import React from "react";

class Monitor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          id="monitor"
        >
          <div
            className="bg-dark w-100 d-flex rounded text-light flex-row"
            id="history"
          >
            <div id="equal"></div>
            <div id="valueTwo"></div>
            <div id="sign"></div>
            <div id="valueOne"></div>
          </div>
          <div className="bg-light rounded w-100 d-flex" id="live-monitor">
            0
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Monitor;
