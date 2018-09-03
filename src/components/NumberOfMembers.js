import React, { Component } from "react";

class NumberOfMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numMembers: 0 };
  }

  render() {
    return "Number of members: " + this.state.numMembers;
  }
}

export default NumberOfMembers;
