import React from "react";
import { url } from "./constants";
import { setChannels } from "./actions";
import { connect } from "react-redux";
import Routes from "./components/Routes";

class App extends React.Component {
  source = new EventSource(`${url}/stream`);
  componentDidMount() {
    this.source.onmessage = event => {
      const { data } = event;

      const channels = JSON.parse(data);

      this.props.setChannels(channels);
    };
  }

  render() {
    return <Routes />;
  }
}

const mapDispatchToProps = {
  setChannels
};

const mapStateToProps = state => {
  return {
    channels: state.channels
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
