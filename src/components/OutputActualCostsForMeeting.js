import React from "react";
import TextField from "@material-ui/core/TextField";

class OutputActualCostsForMeeting extends React.Component {
  render() {
    return (
      <div>
        <TextField
          id="actualCosts"
          label="Actual costs ($)"
          type="currency"
          value={this.props.actualCosts}
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
