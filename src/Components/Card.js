import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.location === "Online") {
    badgeText = "Online";
  } else if (props.item.openSpots === 0) {
    badgeText = "Sold Out";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge"> {badgeText} </div>}
      <img src={props.item.coverImg} alt="img-card" className="card--img" />
      <div className="card--stats">
        <img
          src={require("../Images/Star.png")}
          alt="star-card"
          className="card--img_star"
        />
        <span>({props.item.stats.rating}) </span>
        <span className="gray">{props.item.stats.reviewCount} • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
