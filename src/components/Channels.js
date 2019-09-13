import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ChannelFormContainer from "./ChannelFormContainer";

class Channels extends React.Component {
  render() {
    const { channels } = this.props;
    const items = channels.map((channel, index) => (
      <li key={index}>
        <Link to={`/channel/${channel.id}/${channel.name}`}>
          {channel.name}
        </Link>
      </li>
    ));
    return (
      <div>
        <ChannelFormContainer />
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
export default connect(mapStateToProps)(Channels);
