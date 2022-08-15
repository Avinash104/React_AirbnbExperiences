import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={require("../Images/Group.png")}
        alt="Imagegroup"
        className="hero--img_grp"
      />

      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
