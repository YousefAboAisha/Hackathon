import React from "react";
import classes from "./video.module.css";
import { useNavigate } from "react-router-dom";

const Video = ({ vid, text, btn, type }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("problems");
  };

  return (
    <div className={classes.video}>
      <div className={classes.box}>
        <span>{text}</span>
        {type === "withBtn" ? (
          <button onClick={clickHandler}>
            {btn} <i className="fas fa-exclamation-triangle"></i>
          </button>
        ) : null}
      </div>
      <video src={vid} autoPlay loop muted height="200"></video>
    </div>
  );
};

export default Video;
