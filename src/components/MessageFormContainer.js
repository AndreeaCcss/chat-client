import React from "react";
import request from "superagent";

import { url } from "../constants";
import MessageForm from "./MessageForm";

class MessageFormContainer extends React.Component {
  state = {
    text: ""
  };

  onChange = event => {
    const {
      target: { value }
    } = event;
    console.log("value test:", value);

    this.setState({ text: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { text } = this.state;
    const { id: channelId } = this.props;
    // const channelId = this.props.id

    request
      .post(`${url}/message`)
      .send({ text, channelId })
      .then(() => {
        this.setState({ text: "" });
      })
      .catch(console.error);
  };

  render() {
    return (
      <MessageForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.text}
      />
    );
  }
}

export default MessageFormContainer;
