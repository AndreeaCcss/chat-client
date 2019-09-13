import React, { Component } from "react";
import { Route } from "react-router-dom";

import Channels from "./Channels";

export default class Routes extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Channels} />
      </main>
    );
  }
}
