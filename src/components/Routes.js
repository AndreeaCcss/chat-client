import React, { Component } from "react";
import { Route } from "react-router-dom";

import Channels from "./Channels";
import Channel from "./Channel";
export default class Routes extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Channels} />
        <Route path="/channel/:id" component={Channel} />
      </main>
    );
  }
}
