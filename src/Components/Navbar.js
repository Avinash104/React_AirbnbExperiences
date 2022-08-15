import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img
        src={require("../Images/airbnb-logo.png")}
        alt="Airbnb Logo"
        className="nav--logo"
      />
    </nav>
  );
}
