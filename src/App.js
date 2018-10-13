import React, { Component } from "react";
import "./App.css";
import MCCAppBar from "./components/MCCAppBar";
import InputNumberOfAttendees from "./components/InputNumberOfAttendees";
import InputDurationOfMeeting from "./components/InputDurationOfMeeting";
import InputAverageCostPerHour from "./components/InputAverageCostPerHour";
import OutputActualCostsForMeeting from "./components/OutputActualCostsForMeeting";
import Divider from "@material-ui/core/Divider";
class App extends Component {
  calcActualCosts = (
    pNumAttendees,
    pDurationInMinutes,
    pAverageCostPerHour
  ) => {
    const numA = pNumAttendees;
    const duration = pDurationInMinutes;
    const avrgCost = pAverageCostPerHour;

    console.log("#Attendees: " + numA);
    console.log("#Duration: " + duration + "min");
    console.log("#AverageCost: " + avrgCost + "$");

    const rawVal =
      pNumAttendees * (pDurationInMinutes / 60) * pAverageCostPerHour;
    const val = parseFloat(rawVal).toFixed(2);
    console.log("Costs for meeting: " + val);
    return val;
  };

  constructor(props) {
    super(props);

    const init_numAttendees = 3;
    const init_durationMin = 30;
    const init_averageCosts = 50;

    this.state = {
      numAttendees: init_numAttendees,
      durationInMinutes: init_durationMin,
      averageCostsPerHour: init_averageCosts,
      actualCosts: this.calcActualCosts(
        init_numAttendees,
        init_durationMin,
        init_averageCosts
      )
    };
  }

  onChangeNumAttendees = pNumAttendees => {
    this.setState({
      numAttendees: pNumAttendees,
      actualCosts: this.calcActualCosts(
        pNumAttendees,
        this.state.durationInMinutes,
        this.state.averageCostsPerHour
      )
    });
  };

  onChangeDurationInMinutes = pDurationInMinutes => {
    this.setState({
      durationInMinutes: pDurationInMinutes,
      actualCosts: this.calcActualCosts(
        this.state.numAttendees,
        pDurationInMinutes,
        this.state.averageCostsPerHour
      )
    });
  };

  onChangeAverageCostPerHour = pAverageCostPerHour => {
    this.setState({
      averageCostsPerHour: pAverageCostPerHour,
      actualCosts: this.calcActualCosts(
        this.state.numAttendees,
        this.state.durationInMinutes,
        pAverageCostPerHour
      )
    });
  };

  render() {
    return (
      <div className="App">
        <MCCAppBar />
        <p className="App-intro">
          Want to know what it takes to hold a meeting?
        </p>

        <InputNumberOfAttendees
          numAttendees={this.state.numAttendees}
          onChange={this.onChangeNumAttendees}
        />
        <InputDurationOfMeeting
          durationInMinutes={this.state.durationInMinutes}
          onChange={this.onChangeDurationInMinutes}
        />
        <InputAverageCostPerHour
          averageCostsPerHour={this.state.averageCostsPerHour}
          onChange={this.onChangeAverageCostPerHour}
        />
        <Divider />
        <OutputActualCostsForMeeting actualCosts={this.state.actualCosts} />
      </div>
    );
  }
}

export default App;
