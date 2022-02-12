import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Navigation from "../UI/link/link";
import SideBar from "../Sideabar/Sidebar";
import logo from "../../Media/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  localStorage.setItem("color", "#ff4c29");
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(localStorage.getItem("color"));

  const color = getComputedStyle(document.documentElement).getPropertyValue(
    "--color4"
  );

  const changeHandler = (e) => {
    setValue(e.target.value);
    document.documentElement.style.setProperty("--color4", value);
  };

  useEffect(() => {
    localStorage.setItem("color", value);
  }, [value]);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className={classes.left}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className={classes.ring}>
            <i className="fas fa-bell"></i>
            <span>3</span>
          </div>
        </div>

        {/* <div className={classes.middle}>
          <span>Chage Theme</span>
          <input
            type="color"
            value={value}
            onChange={(e) => changeHandler(e)}
          />
        </div> */}

        <div className={classes.right}>
          <Navigation path="contact" name="تواصل معنا" />
          <Navigation path="problems" name="إبلاغ عن مشكلة" />
          <Navigation path="/" name="الرئيسية" />
          <Link to={"signin"}>
            <button>تسجيل الدخول</button>
          </Link>
          <Link to={"signup"}>
            <button>إنشاء حساب </button>
          </Link>
        </div>

        <div className={classes.toggle} onClick={clickHandler}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <SideBar toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default Navbar;
