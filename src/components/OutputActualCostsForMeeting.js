import React from "react";
import TextField from "@material-ui/core/TextField";

class OutputActualCostsForMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actualCost: props.actualCost };
  }

  render() {
    return (
      <div>
        <TextField
          id="actualCosts"
          label="Actual costs ($)"
          type="number"
          value={this.state.actualCost}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          readOnly="true"
        />
      </div>
    );
  }
}

export default OutputActualCostsForMeeting;
