import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class InputAverageCostPerHour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { averageCostPerHour: 50 };
  }

  render() {
    return (
      <div>
        <TextField
          id="avCostPerHour"
          label="Average cost/hour ($)"
          type="number"
          value={this.state.averageCostPerHour}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
      </div>
    );
  }
}

export default InputAverageCostPerHour;
