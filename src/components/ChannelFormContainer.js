import React from "react";
import request from "superagent";
import { url } from "../constants";
import ChannelForm from "./ChannelForm";

export default class ChannelFormContainer extends React.Component {
  state = {
    name: ""
  };

  onChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ name: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    request
      .post(`${url}/channel`)
      .send({ name })
      .then(() => {
        this.setState({ name: "" });
      })
      .catch(console.error);
  };
  render() {
    return (
      <ChannelForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.name}
      />
    );
  }
}
