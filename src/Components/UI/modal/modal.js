import React, { useState, useEffect } from "react";
import classes from "./modal.module.css";
import axios from "axios";
import Spinner from "../Spinner/spinner";

const Modal = () => {
  const [quote, setQuote] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let flag = true;
    setLoading(true);
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => {
        let fetchedData = res.data[Math.floor(Math.random() * res.data.length)];
        if (flag) {
          setQuote(fetchedData);
          setLoading(false);
        }
      })

      .catch((error) => {
        console.log(error);
        if (flag) setLoading(false);
      });

    return () => {
      flag = false;
    };
  }, []);

  useEffect(() => {
    let flag = true;
    setTimeout(() => {
      if (flag) setIsOpened(true);
    }, 4000);
    return () => {
      flag = false;
    };
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div
      className={classes.quote}
      style={{
        bottom: isOpened ? "15px" : "200%",
      }}
    >
      <i className="fas fa-times" onClick={() => setIsOpened(false)}></i>

      <>
        <span>Today`s Advice</span>
        <p> - {quote.text}</p>
        <p>Author: "{quote.author}"</p>
      </>
      <i className="fas fa-quote-left"></i>
      <i className="fas fa-quote-right"></i>
    </div>
  );
};

export default Modal;
