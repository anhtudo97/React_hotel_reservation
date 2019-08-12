import React from "react";

export default function Hero({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

Hero.defaultProps = {
  hero: "defaultProps"
};
