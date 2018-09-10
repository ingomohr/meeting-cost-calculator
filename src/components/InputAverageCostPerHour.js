import React from "react";
import TextField from "@material-ui/core/TextField";

class InputAverageCostPerHour extends React.Component {
  handleChange = name => event => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <TextField
          id="averageCostsPerHour"
          label="Average cost/hour ($)"
          type="number"
          value={this.props.averageCostsPerHour}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          onChange={this.handleChange("averageCostsPerHour")}
        />
      </div>
    );
  }
}

export default InputAverageCostPerHour;
