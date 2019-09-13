import React from "react";
import request from "superagent";
// connect to stream
// socket.io for server driven comm or
// web sockets - dff protocol - doesnt use http
// server sent events - built into JS in the browser
// json sse
class App extends React.Component {
  state = {
    text: ""
  };
  // evSource is built in brwoser
  source = new EventSource("http://localhost:4000/stream");
  componentDidMount() {
    // when we did stream.send was a new event
    // when a new message comes in we run tthis
    this.source.onmessage = event => {
      const { data } = event;
      console.log("data:", data);

      const messages = JSON.parse(data);
      console.log("mess", messages);
    };
  }
  onChange = event => {
    const {
      target: { value }
    } = event;

    console.log("val", value);

    this.setState({ text: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    request
      .post("http://localhost:4000/message")
      .send({ text })
      .then(console.log)
      .catch(console.error);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.text} />
        <button type="button">Send</button>
      </form>
    );
  }
}
export default App;
