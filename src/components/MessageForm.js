import React from "react";

class MessageForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.value}
          placeholder="message"
        />

        <button>send</button>
      </form>
    );
  }
}

export default MessageForm;
