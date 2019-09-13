import React from "react";
import request from "superagent";
import { url } from "./constants";
// connect to stream
// socket.io for server driven comm or
// web sockets - dff protocol - doesnt use http
// server sent events - built into JS in the browser
// json sse
class App extends React.Component {
  state = {
    text: "",
    messages: []
  };
  // evSource is built in brwoser
  source = new EventSource(`${url}/stream`);
  componentDidMount() {
    // when we did stream.send was a new event
    // when a new message comes in we run tthis
    this.source.onmessage = event => {
      const { data } = event;
      console.log("data test:", data);

      const messages = JSON.parse(data);
      this.setState({ messages });
      console.log("mess test", messages);
    };
  }
  onChange = event => {
    const {
      target: { value }
    } = event;

    // console.log("val test", value);

    this.setState({ text: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    request
      .post(`${url}/message`)
      .send({ text })
      .then(response => {
        console.log(response);
        this.setState({ text: "" });
      })
      .catch(console.error);
  };
  render() {
    const { messages } = this.state;
    const items = messages.map((message, index) => (
      <li key={index}>{message.text}</li>
    ));
    return (
      <main>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button>Send</button>
        </form>
        <ul>{items}</ul>
      </main>
    );
  }
}
export default App;
