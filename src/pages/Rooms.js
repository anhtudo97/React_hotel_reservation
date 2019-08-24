import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import RoomsContainer from "../components/RoomsContainer";

import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" subtitle="deluxe rooms starting a @344">
          {" "}
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
