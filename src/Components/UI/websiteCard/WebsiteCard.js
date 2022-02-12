import React from "react";
import classes from "./WebsiteCard.module.css";

const WebsiteCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={props.img} alt="Photo" />
      </div>
      <hr />
      <div className={classes.text}>
        <span>{props.title}</span>
        <div className={classes.desc}>
          {props.description.map((elem, index) => {
            return <span key={index}>{elem}</span>;
          })}
        </div>
        <a href={props.link} target="_blank">
          <button>Live view</button>
        </a>
      </div>
    </div>
  );
};

export default WebsiteCard;
