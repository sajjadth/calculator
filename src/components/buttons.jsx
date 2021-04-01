import React from "react";
import $ from "jquery";

class Buttons extends React.Component {
  handleNumberClick(e) {
    let number = Number(e.target.textContent);
    const liveMonitorVal = Number($("#live-monitor").text());
    const liveMonitor = $("#live-monitor");

    if (number === 0) {
      if (liveMonitorVal === 0) {
        liveMonitor.text(number);
      } else {
        liveMonitor.append(number);
      }
    } else {
      if (liveMonitorVal === 0) {
        liveMonitor.text(number);
      } else {
        liveMonitor.append(number);
      }
    }
  }
  handleSignClick(e) {
    const signs = e.target.textContent;
    const liveMonitorVal = Number($("#live-monitor").text());
    const liveMonitor = $("#live-monitor");
    const signHistory = $("#sign");
    const valueOneHistory = $("#valueOne");
    const valueTwoHistory = $("#valueTwo");
    const valueTwoHistoryVal = $("#valueTwo").text();
    const equal = $("#equal");

    valueOneHistory.text(liveMonitorVal);
    signHistory.text(signs);
    liveMonitor.text(0);
    valueTwoHistory.text("");
    equal.text("");
  }
  handleEqualClick() {
    const signHistoryVal = $("#sign").text();
    const signHistory = $("#sign");
    const valueOneHistoryVal = Number($("#valueOne").text());
    const liveMonitorVal = Number($("#live-monitor").text());
    const valueTwoHistory = $("#valueTwo");
    const liveMonitor = $("#live-monitor");
    const equal = $("#equal");

    if (signHistoryVal === "+") {
      valueTwoHistory.text(liveMonitorVal);
      equal.text("=");
      liveMonitor.text(valueOneHistoryVal + liveMonitorVal);
    } else if (signHistoryVal === "-") {
      valueTwoHistory.text(liveMonitorVal);
      equal.text("=");
      liveMonitor.text(valueOneHistoryVal - liveMonitorVal);
    } else if (signHistoryVal === "×") {
      valueTwoHistory.text(liveMonitorVal);
      equal.text("=");
      liveMonitor.text(valueOneHistoryVal * liveMonitorVal);
    } else if (signHistoryVal === "÷") {
      valueTwoHistory.text(liveMonitorVal);
      equal.text("=");
      liveMonitor.text(valueOneHistoryVal / liveMonitorVal);
    }
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex row justify-content-center align-items-center"
          id="numpad"
        >
          <div className="btn btn-success">c</div>
          <div className="btn btn-success">b</div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleSignClick(e)}
          >
            ÷
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleSignClick(e)}
          >
            ×
          </div>
          <div className="w-100"></div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            7
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            8
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            9
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleSignClick(e)}
          >
            -
          </div>
          <div className="w-100"></div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            4
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            5
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            6
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleSignClick(e)}
          >
            +
          </div>
          <div className="w-100"></div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            1
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            2
          </div>
          <div
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            3
          </div>
          <div
            className="btn btn-success"
            id="equal"
            onClick={() => this.handleEqualClick()}
          >
            =
          </div>
          <div className="w-100"></div>
          <div className="btn btn-success"></div>
          <div
            value="0"
            className="btn btn-success"
            onClick={(e) => this.handleNumberClick(e)}
          >
            0
          </div>
          <div className="btn btn-success">.</div>
          <div className="btn btn-success"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
