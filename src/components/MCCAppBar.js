import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


class MCCAppBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" gutterBottom>
              Meeting Cost Calculator
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MCCAppBar;
