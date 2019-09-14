import React from "react";
import { connect } from "react-redux";

import MessageFormContainer from "./MessageFormContainer";

class Channel extends React.Component {
  render() {
    const {
      channels,
      match: {
        params: { id }
      }
    } = this.props;

    const param = Number(id);

    const channel = channels.find(channel => channel.id === param);

    const items =
      channel &&
      channel.messages.map((message, index) => (
        <li key={index}>{message.text}</li>
      ));

    return (
      <div>
        <MessageFormContainer id={param} />
        <ul>{items}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps)(Channel);
