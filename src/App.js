import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputNumberOfAttendees from "./components/InputNumberOfAttendees";
import InputDurationOfMeeting from "./components/InputDurationOfMeeting";
import InputAverageCostPerHour from "./components/InputAverageCostPerHour";
import OutputActualCostsForMeeting from "./components/OutputActualCostsForMeeting";
import Divider from "@material-ui/core/Divider";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Meeting-Cost Calculator</h1>
        </header>
        <p className="App-intro">
          Want to know what it takes to hold a meeting?
        </p>
        <InputNumberOfAttendees />
        <InputDurationOfMeeting />
        <InputAverageCostPerHour />
        <Divider />
        <OutputActualCostsForMeeting />
      </div>
    );
  }
}

export default App;
