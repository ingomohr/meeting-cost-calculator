import React from "react";
import TextField from "@material-ui/core/TextField";

class InputNumberOfAttendees extends React.Component {
  handleChange = name => event => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <TextField
          id="numAttendees"
          label="Number of attendees"
          type="number"
          value={this.props.numAttendees}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          onChange={this.handleChange("numAttendees")}
        />
      </div>
    );
  }
}

export default InputNumberOfAttendees;
