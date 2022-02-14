import React, { useEffect, useState } from "react";
import classes from "./comments.module.css";
import Comment from "../UI/comment/comment";
import axios from "axios";
import Spinner from "../UI/Spinner/spinner";
import Heading from "../UI/heading/heading";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState("false");
  const [fetchedComments, setFetchedComments] = useState([]);

  const clearInput = () => {
    setComment("");
  };

  const commentHandler = (e) => {
    e.preventDefault();
    clearInput();
    setLoading(true);

    const date =
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

    const data = { comment, date };

    axios
      .post(
        "https://hackathon-60cfb-default-rtdb.firebaseio.com/Comments.json",
        data
      )
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    let flag = true;
    axios
      .get("https://hackathon-60cfb-default-rtdb.firebaseio.com/Comments.json")
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push(res.data[key]);
        }
        if (flag) {
          setFetchedComments(fetchedData);
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
  }, [fetchedComments]);

  let message = (
    <>
      {fetchedComments.map((elem) => {
        return <Comment key={elem.date} msg={elem.comment} date={elem.date} />;
      })}
    </>
  );

  if (loading) {
    message = <Spinner />;
  }

  return (
    <div className={classes.wrapper}>
      <Heading
        title="الآراء والتعليقات"
        img={
          "https://img.icons8.com/external-others-sbts2018/40/000000/external-comment-social-media-basic-1-others-sbts2018.png"
        }
      />
      <div className={classes.box}>
        <textarea
          placeholder="أضِف تعليقاً"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <div className={classes.btn}>
          <button
            disabled={comment.trim() === "" ? true : false}
            onClick={commentHandler}
          >
            تعليق
          </button>
          <button onClick={clearInput}>إلغاء</button>
        </div>

        {message}
      </div>
    </div>
  );
};

export default Comments;
