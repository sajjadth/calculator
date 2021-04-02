import React from "react";
import $ from "jquery";

class Buttons extends React.Component {
  handleNumberClick(e) {
    let number = e.target.textContent;
    const liveMonitorVal = $("#live-monitor").text();
    const liveMonitor = $("#live-monitor");

    if (number === "0") {
      if (liveMonitorVal === "0") {
        liveMonitor.text(number);
      } else {
        liveMonitor.append(number);
      }
    } else {
      if (liveMonitorVal === "0") {
        if (number === ".") {
          liveMonitor.append(number);
        } else {
          liveMonitor.text(number);
        }
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
    const parenthesesValOneStart = $("#parenthesesValOneStart");
    const parenthesesValOneEnd = $("#parenthesesValOneEnd");
    const equal = $("#equal");
    if (liveMonitorVal < 0) {
      parenthesesValOneStart.text("(");
      valueOneHistory.text(liveMonitorVal);
      parenthesesValOneEnd.text(")");
      signHistory.text(signs);
      liveMonitor.text(0);
      valueTwoHistory.text("");
      equal.text("");
    } else {
      signHistory.text(signs);
      liveMonitor.text(0);
      valueTwoHistory.text("");
      equal.text("");
      valueOneHistory.text(liveMonitorVal);
    }
  }
  checkinhValueTwo() {
    const liveMonitorVal = Number($("#live-monitor").text());
    const parenthesesValTwoStart = $("#parenthesesValTwoStart");
    const parenthesesValTwoEnd = $("#parenthesesValTwoEnd");
    if (liveMonitorVal < 0) {
      parenthesesValTwoStart.text("(");
      parenthesesValTwoEnd.text(")");
    } else {
      null;
    }
  }
  handleEqualClick() {
    const signHistoryVal = $("#sign").text();
    const valueOneHistoryVal = Number($("#valueOne").text());
    const liveMonitorVal = Number($("#live-monitor").text());
    const valueTwoHistory = $("#valueTwo");
    const liveMonitor = $("#live-monitor");
    const equal = $("#equal");

    if (signHistoryVal === "+") {
      this.checkinhValueTwo();
      valueTwoHistory.text(liveMonitorVal);
      equal.text("=");
      liveMonitor.text((valueOneHistoryVal + liveMonitorVal).toFixed(2));
    } else if (signHistoryVal === "-") {
      this.checkinhValueTwo();
      valueTwoHistory.text(liveMonitorVal);
      equal.text("=");
      liveMonitor.text(valueOneHistoryVal - liveMonitorVal);
    } else if (signHistoryVal === "×") {
      this.checkinhValueTwo();
      valueTwoHistory.text(liveMonitorVal);
      equal.text("=");
      liveMonitor.text(valueOneHistoryVal * liveMonitorVal);
    } else if (signHistoryVal === "÷") {
      this.checkinhValueTwo();
      valueTwoHistory.text(liveMonitorVal);
      equal.text("=");
      liveMonitor.text(valueOneHistoryVal / liveMonitorVal);
    }
  }
  handleBack() {
    const liveMonitorVal = $("#live-monitor").text();
    const liveMonitor = $("#live-monitor");
    const backspaceNumber = liveMonitorVal.slice(0, -1);
    if (liveMonitorVal.length === 1) {
      liveMonitor.text(0);
    } else {
      liveMonitor.text(backspaceNumber);
    }
  }
  handleClear() {
    const liveMonitor = $("#live-monitor");
    const signHistory = $("#sign");
    const valueOneHistory = $("#valueOne");
    const valueTwoHistory = $("#valueTwo");
    const equal = $("#equal");
    const parenthesesValOneStart = $("#parenthesesValOneStart");
    const parenthesesValOneEnd = $("#parenthesesValOneEnd");
    const parenthesesValTwoStart = $("#parenthesesValTwoStart");
    const parenthesesValTwoEnd = $("#parenthesesValTwoEnd");

    liveMonitor.text(0);
    valueOneHistory.text("");
    valueTwoHistory.text("");
    signHistory.text("");
    equal.text("");
    parenthesesValOneStart.text("");
    parenthesesValOneEnd.text("");
    parenthesesValTwoStart.text("");
    parenthesesValTwoEnd.text("");
  }
  handleNegativeAndPositive() {
    const liveMonitorVal = $("#live-monitor").text();
    const liveMonitor = $("#live-monitor");
    const backspaceNumber = liveMonitorVal.replace("-", "");

    if (liveMonitorVal > 0) {
      liveMonitor.prepend("-");
    } else if (liveMonitorVal < 0) {
      liveMonitor.text(backspaceNumber);
    }
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex row justify-content-center align-items-center"
          id="numpad"
        >
          <div
            className="btn center delete"
            id="clear"
            onClick={() => this.handleClear()}
          >
            c
          </div>
          <div className="btn center delete" onClick={() => this.handleBack()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-return-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </div>
          <div
            className="btn center delete"
            onClick={() => this.handleNegativeAndPositive()}
          >
            <sup>+</sup>/<sub>-</sub>
          </div>
          <div
            className="btn center sign"
            onClick={(e) => this.handleSignClick(e)}
          >
            ÷
          </div>
          <div className="w-100"></div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            7
          </div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            8
          </div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            9
          </div>
          <div
            className="btn center sign"
            onClick={(e) => this.handleSignClick(e)}
          >
            ×
          </div>
          <div className="w-100"></div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            4
          </div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            5
          </div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            6
          </div>
          <div
            className="btn center sign"
            onClick={(e) => this.handleSignClick(e)}
          >
            -
          </div>
          <div className="w-100"></div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            1
          </div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            2
          </div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            3
          </div>

          <div
            className="btn center sign"
            onClick={(e) => this.handleSignClick(e)}
          >
            +
          </div>
          <div className="w-100"></div>
          <div
            value="0"
            className="btn center take2 number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            0
          </div>
          <div
            className="btn center number"
            onClick={(e) => this.handleNumberClick(e)}
          >
            .
          </div>
          <div
            className="btn center sign"
            id="equal"
            onClick={() => this.handleEqualClick()}
          >
            =
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
