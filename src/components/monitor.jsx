import React from "react";

class Monitor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex flex-column justify-content-center align-items-center m-1"
          id="monitor"
        >
          <div
            className="bg-dark w-100 d-flex text-light justify-content-end flex-row"
            id="history"
          >
            <div className="history-items" id="parenthesesValOneStart"></div>
            <div className="history-items" id="valueOne"></div>
            <div className="history-items" id="parenthesesValOneEnd"></div>
            <div className="history-items" id="sign"></div>
            <div className="history-items" id="parenthesesValTwoStart"></div>
            <div className="history-items" id="valueTwo"></div>
            <div className="history-items" id="parenthesesValTwoEnd"></div>
            <div className="history-items" id="equal"></div>
          </div>
          <div
            className="bg-info w-100 d-flex justify-content-end"
            id="live-monitor"
          >
            0
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Monitor;
