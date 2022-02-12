import React from "react";
import classes from "./comment.module.css";

const Comment = (props) => {
  return (
    <div className={classes.msg}>
      <p>{props.msg}</p>
      <span> {props.date} </span>
      <span> UNKNOWN </span>
    </div>
  );
};

export default Comment;
