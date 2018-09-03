import React from "react";
import TextField from "@material-ui/core/TextField";

class InputDurationOfMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { durationInMin: 30 };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="durationOfMeeting"
          label="Duration in minutes"
          type="number"
          value={this.state.durationInMin}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          onChange={this.handleChange("durationInMin")}
        />
      </div>
    );
  }
}

export default InputDurationOfMeeting;
