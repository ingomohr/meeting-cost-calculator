import React from "react";
import TextField from "@material-ui/core/TextField";

class OutputActualCostsForMeeting extends React.Component {
  calcActualCost() {
    return this.props.numAttendees * 10;
  }

  render() {
    return (
      <div>
        <TextField
          id="actualCosts"
          label="Actual costs ($)"
          type="number"
          value={this.calcActualCost()}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
      </div>
    );
  }
}

export default OutputActualCostsForMeeting;
