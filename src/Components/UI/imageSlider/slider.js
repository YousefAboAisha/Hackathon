import React from "react";
import Slider from "react-slick";
import "./slider.css";
import RateCard from "../rateCard/rateCard";

export default function ImageSlider() {
  const persons = [
    {
      name: "John Whick",
      value: 5,
      img: "https://hivlawcommission.org/wp-content/uploads/2016/04/Business-man-1.png",
      comment:
        "Experience is the name everyone gives to their mistakes, Incredibly cool bro, keep it up.",
    },
    {
      name: "Rose Ran",
      value: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfbDNKj07qLnLzkY1bfiDtux_kixDkTfy6g&usqp=CAU",
      comment:
        "Optimism is an occupational hazard of programming: feedback is the treatment, thats pretty awsome.",
    },
    {
      name: "Kevin Sam",
      value: 4,
      img: "https://www.pngitem.com/pimgs/m/457-4571358_businessman-png-transparent-png.png",
      comment:
        "Make it work, make it right, make it fast, I expect more than this is the future I believe in you!",
    },
    {
      name: "Ahmed Rashad",
      value: 5,
      img: "https://hivlawcommission.org/wp-content/uploads/2016/04/Business-man-1.png",
      comment:
        "Experience is the name everyone gives to their mistakes, Incredibly cool bro, keep it up.",
    },
    {
      name: "Mohammed Ashi",
      value: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfbDNKj07qLnLzkY1bfiDtux_kixDkTfy6g&usqp=CAU",
      comment:
        "Optimism is an occupational hazard of programming: feedback is the treatment, thats pretty awsome.",
    },
    {
      name: "Abood Safeen",
      value: 4,
      img: "https://www.pngitem.com/pimgs/m/457-4571358_businessman-png-transparent-png.png",
      comment:
        "Make it work, make it right, make it fast, I expect more than this is the future I believe in you!",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {persons.map((card, index) => {
          return (
            <div>
              <RateCard
                name={card.name}
                src={card.img}
                value={card.value}
                text={card.comment}
                key={index}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
