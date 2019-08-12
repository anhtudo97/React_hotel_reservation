import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
export default class SingleRoom extends Component {
  // when routing to this component
  // the information of previous route
  // will send throw route to this component
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: props.match.params.slug,
      defaultBcg
    };
  }
  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    return <div>SingleRoom page</div>;
  }
}

SingleRoom.contextType = RoomContext;
