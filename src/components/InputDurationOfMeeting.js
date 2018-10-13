import React from "react";
import TextField from "@material-ui/core/TextField";

class InputDurationOfMeeting extends React.Component {
 
  handleChange = name => event => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  };
 
  render() {
    return (
      <div>
        <TextField
          id="durationInMinutes"
          label="Duration (minutes)"
          type="number"
          value={this.props.durationInMinutes}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          onChange={this.handleChange("durationInMinutes")}
        />
      </div>
    );
  }
}

export default InputDurationOfMeeting;
