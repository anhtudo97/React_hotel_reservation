import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
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
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    // get the first img of images array
    // name is "mainImg"
    // and copy a part without "mainImg" into "defaultImages"
    const [mainImg, ...defaultImages] = images;
    console.log("dau", defaultImages);
    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => {
              return <img key={index} src={item || defaultBcg} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: ${size} SQFT</h6>
              <h6>
                Max capacity:
                {capacity < 1 ? `${capacity} person` : `${capacity} people`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

SingleRoom.contextType = RoomContext;
