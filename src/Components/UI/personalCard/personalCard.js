import React from "react";
import "./personalCard.css";

const personalCard = (props) => {
  return (
    <div className="our-team">
      <div className="picture">
        <img className="img-fluid" src={props.img} alt="person" />
      </div>

      <div className="team-content">
        <h3 className="name">{props.name}</h3>
        <h4 className="title">{props.title}</h4>
      </div>

      <ul className="social">
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href={props.facebook}
            className="fa fa-facebook"
          ></a>
        </li>

        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href={props.email}
            className="fas fa-envelope"
          ></a>
        </li>

        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href={props.instagram}
            className="fa fa-instagram"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default personalCard;
