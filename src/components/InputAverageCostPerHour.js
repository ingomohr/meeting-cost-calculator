import React from "react";
import TextField from "@material-ui/core/TextField";

class InputAverageCostPerHour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { averageCostPerHour: 50 };
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
          id="avCostPerHour"
          label="Average cost/hour ($)"
          type="number"
          value={this.state.averageCostPerHour}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          onChange={this.handleChange("averageCostPerHour")}
        />
      </div>
    );
  }
}

export default InputAverageCostPerHour;
