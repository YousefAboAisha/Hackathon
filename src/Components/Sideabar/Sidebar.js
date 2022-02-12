import React from "react";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Media/logo.svg";

const SideBar = ({ toggle, setToggle }) => {
  return (
    <div
      className={classes.nav}
      style={{
        transform: toggle ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <Link to="/" name="الرئيسية" onClick={() => setToggle(false)}>
        الرئيسية
      </Link>

      <Link
        to="problems"
        name="إبلاغ عن مشكلة"
        onClick={() => setToggle(false)}
      >
        إبلاغ عن مشكلة
      </Link>

      <Link to="contact" name="تواصل معنا" onClick={() => setToggle(false)}>
        تواصل معنا
      </Link>

      <img className={classes.logo} src={logo} alt="logo" />

      <div className={classes.social}>
        <a target="_blank" href="https://www.facebook.com/yousef.aboesha.9/">
          <i className="fab fa-facebook"></i>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/yousef-aboesha-9b40b4193/"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a target="_blank" href="https://twitter.com/_abuAisha">
          <i className="fab fa-twitter"></i>
        </a>

        <a target="_blank" href="https://github.com/YousefAboAisha">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <span> All Rights Reserved To Yousef R Abo Aisha ©</span>
    </div>
  );
};

export default SideBar;
