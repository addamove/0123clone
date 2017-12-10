import React, { Component } from "react";
import Content from "../Content/Content";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Content title={"SERIALS"} type={"TV"} />
        <Content title={"MOVIES"} type={"movies"} />
      </div>
    );
  }
}
