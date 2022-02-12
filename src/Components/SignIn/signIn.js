import React, { useRef, useState, useEffect } from "react";
import classes from "./signin.module.css";
import axios from "axios";
import Heading from "../UI/heading/heading";
import Notistack from "../UI/Snackbar/snackbar";

const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const clearInputs = () => {
    setEmail("");
    setTimeout(() => {
      setSnackbar(false);
    }, 3000);
  };

  return (
    <div className={classes.wrapper}>
      {snackbar ? <Notistack msg={"تم إرسال الرسالة بنجاح !"} /> : null}

      <div className={classes.home}>
        <Heading
          title="تسجيل الدخول"
          img="https://img.icons8.com/ios/40/000000/user.png"
        />
        <form id="mainForm" ref={form}>
          <div className={classes.input}>
            <input
              type="email"
              placeholder="البريد الالكتروني"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              minLength={13}
              name="email"
            />
          </div>

          <div className={classes.input}>
            <input
              type="password"
              placeholder="كلمة المرور"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              minLength={4}
              name="password"
            />
          </div>
          <button form="mainForm">
            {loading ? " جارٍ تسجيل الدخول ..." : " تسجل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
