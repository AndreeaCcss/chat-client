import React from "react";
import request from "superagent";
import { url } from "./constants";
import Channels from "./components/Channels";
import ChannelFormContainer from "./components/ChannelFormContainer,";

// connect to stream
// socket.io for server driven comm or
// web sockets - dff protocol - doesnt use http
// server sent events - built into JS in the browser
// json sse
class App extends React.Component {
  state = {
    name: "",
    channels: []
  };
  // evSource is built in brwoser
  source = new EventSource(`${url}/stream`);
  componentDidMount() {
    // when we did stream.send was a new event
    // when a new message comes in we run tthis
    this.source.onmessage = event => {
      const { data } = event;
      console.log("data test:", data);

      const channels = JSON.parse(data);
      this.setState({ channels });
    };
  }

  onDelete = () => {
    request
      .delete(`${url}/message`)
      .then(console.log)
      .catch(console.error);
  };
  render() {
    return (
      <main>
        <ChannelFormContainer />
        <button onClick={this.onDelete}>Delete</button>
        <Channels channels={this.state.channels} />
      </main>
    );
  }
}
export default App;
