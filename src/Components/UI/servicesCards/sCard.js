import React from "react";
import classes from "./sCard.module.css";

const ServicesCard = (props) => {
  return (
    <div className={classes.card}>
      <i className={props.icon}></i>
      <i className={props.icon}></i>
      <h3>{props.title}</h3>
      <p>{props.details}</p>
    </div>
  );
};

export default ServicesCard;
