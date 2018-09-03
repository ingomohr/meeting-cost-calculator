import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class averageCostPerHour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numMembers: 3 };
  }

  render() {
    return (
      <div>
        <TextField
          id="numAttendees"
          label="Number of attendees"
          type="number"
          value={this.state.numMembers}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
      </div>
    );
  }
}

export default averageCostPerHour;
