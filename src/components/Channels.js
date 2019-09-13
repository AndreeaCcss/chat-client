import React from "react";
export default class Channels extends React.Component {
  render() {
    const { channels } = this.props;
    const items = channels.map((channel, index) => (
      <li key={index}>{channel.name}</li>
    ));
    return <ul>{items}</ul>;
  }
}
