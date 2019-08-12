import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  render() {
    const { featuredRooms: rooms } = this.context;
    return (
      <div>
        Featured Rooms
        <Loading />
      </div>
    );
  }
}

//push the RoomContext to context of class FeaturedRooms
FeaturedRooms.contextType = RoomContext;
