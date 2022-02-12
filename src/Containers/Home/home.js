import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/UI/modal/modal";
import Video from "../../Components/video/video";
import vid from "../../Media/finalVideo.mp4";
import Problem from "./problem/problem";
import axios from "axios";
import Spinner from "../../Components/UI/Spinner/spinner";
import Heading from "../../Components/UI/heading/heading";
import Comments from "../../Components/Comments/comments";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get("https://hackathon-60cfb-default-rtdb.firebaseio.com/problems.json")
      .then((res) => {
        const fetchedData = res.data;
        const arr = [];
        for (let elem in fetchedData) {
          arr.push(fetchedData[elem]);
        }
        console.log(arr);
        setData(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.home}>
        <Video
          vid={vid}
          text={"ما نقصده هو جعل كوكبنا الصغير مكاناً أفضل للعيش"}
          btn={" إبلاغ الآن"}
          type={"withBtn"}
        />
      </div>

      <div className={classes.container}>
        <div className={classes.skills}>
          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/70/000000/street-sweeper.png"
              alt="icon"
            />
            <span>معدات متطورة</span>
          </div>

          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/70/000000/road-worker.png"
              alt="icon"
            />
            <span>عمال محترفون</span>
          </div>

          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/70/000000/park-with-street-light.png"
              alt="icon"
            />
            <span>مجتمع نظيف</span>
          </div>

          <div className={classes.skill}>
            <img
              src="https://img.icons8.com/color/70/000000/throw-away.png"
              alt="icon"
            />
            <span>وازع ذاتي</span>
          </div>
        </div>

        <section>
          <Heading
            title="البلاغات"
            img="https://img.icons8.com/emoji/40/000000/warning-emoji.png"
          />

          <div className={classes.cards}>
            {data ? (
              data.length > 0 && data !== null ? (
                data.map((elem, index) => {
                  return <Problem key={index} elem={elem} />;
                })
              ) : (
                <h3>لا توجد بلاغات </h3>
              )
            ) : (
              <Spinner />
            )}
            <button className={classes.showMore}>عرض المزيد</button>
          </div>
        </section>
      </div>
      <Comments />
      <Footer />
      <Modal />
    </div>
  );
};

export default Home;
