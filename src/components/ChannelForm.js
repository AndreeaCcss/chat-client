import React from "react";
export default class ChannelForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.value}
          placeholder="channel"
        />
        <button>Create a channel</button>
      </form>
    );
  }
}
