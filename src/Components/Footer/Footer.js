import React from "react";
import classes from "./Footer.module.css";
import Navigation from "../UI/link/link";
import logo from "../../Media/whitelogo.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes.left}>
        <div className={classes.box}>
          <div className={classes.leftSide}>
            <i className="fas fa-user"></i>
          </div>
          <div className={classes.rightSide}>
            <h4>Name</h4>
            <span>Yousef Rashad Abu Aisha</span>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.leftSide}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className={classes.rightSide}>
            <h4>Address</h4>
            <span>Palestine , Gaza , Tal Al Hawa</span>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.leftSide}>
            <i className="fas fa-envelope"></i>
          </div>
          <div className={classes.rightSide}>
            <h4>E-mail</h4>
            <span>yousef.aboesha@hotmail.com</span>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.leftSide}>
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className={classes.rightSide}>
            <h4>Phone number</h4>
            <span>+970 592-55-1405</span>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.navigations}>
          <Navigation path="/" name="الرئيسية" />
          <Navigation path="/problems" name="إبلاغ عن مشكلة" />
          <Navigation path="/contact" name="تواصل معنا" />
        </div>

        <div className={classes.social}>
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/yousef.aboesha.9/"
            >
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
      </div>
    </div>
  );
};

export default Footer;
