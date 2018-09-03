import React from "react";
import TextField from "@material-ui/core/TextField";

class InputNumberOfAttendees extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numAttendees: 4 };
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
          id="numAttendees"
          label="Number of attendees"
          type="number"
          value={this.state.numAttendees}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          onchange={this.handleChange("numAttendees")}
        />
      </div>
    );
  }
}

export default InputNumberOfAttendees;
