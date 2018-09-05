import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputNumberOfAttendees from "./components/InputNumberOfAttendees";
import InputDurationOfMeeting from "./components/InputDurationOfMeeting";
import InputAverageCostPerHour from "./components/InputAverageCostPerHour";
import OutputActualCostsForMeeting from "./components/OutputActualCostsForMeeting";
import Divider from "@material-ui/core/Divider";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numAttendees: 7 };
  }

  onChangeNumAttendees = pNumAttendees => {
    this.setState({
      numAttendees: pNumAttendees
    });
  };

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

        {}

        <InputNumberOfAttendees
          numAttendees={this.state.numAttendees}
          onChange={this.onChangeNumAttendees}
        />
        <InputDurationOfMeeting />
        <InputAverageCostPerHour />
        <Divider />
        <OutputActualCostsForMeeting numAttendees={this.state.numAttendees} />
      </div>
    );
  }
}

export default App;
