import React, { useState } from "react";
import classes from "./problem.module.css";

const Problem = ({ elem }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={elem.src} alt={"img"} loading="lazy" />
        <div className={classes.search}>
          <span>{elem.status}</span>
        </div>
      </div>

      <div className={classes.text}>
        <h4>{elem.ProjectType} </h4>
        <span>
          <i className="fas fa-map-marker-alt"></i>
          {elem.Address}
        </span>

        {!isOpened ? (
          <p>
            {elem.Message.slice(0, 50)}
            <span onClick={() => setIsOpened(!isOpened)}> المزيد... </span>
          </p>
        ) : (
          <p>
            {elem.Message}
            <span onClick={() => setIsOpened(!isOpened)}> عرض أقل</span>
          </p>
        )}

        <div className={classes.name}>
          <span>مِن: </span>
          <span>{elem.Name}</span>
        </div>
        {/* <div className={classes.email}>
          <span>{elem.Email}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Problem;
