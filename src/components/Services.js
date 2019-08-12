import React, { Component } from "react";
import Title from "./Title";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktail",
        info:
          "Malesuada mollit, potenti leo habitant interdum ac possimus quia? Facere nostrud dignissim sem atque euismod, augue, tortor porta cursus magnis proident vel porta labore aliquid recusandae quaerat"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Malesuada mollit, potenti leo habitant interdum ac possimus quia? Facere nostrud dignissim sem atque euismod, augue, tortor porta cursus magnis proident vel porta labore aliquid recusandae quaerat"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Malesuada mollit, potenti leo habitant interdum ac possimus quia? Facere nostrud dignissim sem atque euismod, augue, tortor porta cursus magnis proident vel porta labore aliquid recusandae quaerat"
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Malesuada mollit, potenti leo habitant interdum ac possimus quia? Facere nostrud dignissim sem atque euismod, augue, tortor porta cursus magnis proident vel porta labore aliquid recusandae quaerat"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((e, i) => {
            return (
              <article key={i} className="service">
                <span>{e.icon}</span>
                <h6>{e.title}</h6>
                <p>{e.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
