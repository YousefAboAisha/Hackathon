import React from "react";
import classes from "./Social.module.css";

const Social = () => {
  return (
    <div className={classes.box}>
      <a href="https://www.facebook.com/yousef.aboesha.9/" target="_blank">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/yousef_aboesha/" target="_blank">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://github.com/YousefAboAisha" target="_blank">
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/yousef-aboesha-9b40b4193/"
        target="_blank"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
