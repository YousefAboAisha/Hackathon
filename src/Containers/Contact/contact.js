import React, { useState, useRef, useEffect } from "react";
import classes from "./contact.module.css";
import contactImg from "../../Media/contact.svg";
import emailjs from "emailjs-com";
import Footer from "../../Components/Footer/Footer";
import Notistack from "../../Components/UI/Snackbar/snackbar";
import ServicesCard from "../../Components/UI/servicesCards/sCard";
import img from "../../Media/person2.svg";
import Video from "../../Components/video/video";
import vid from "../../Media/contactBackground.mp4";
import Heading from "../../Components/UI/heading/heading";
import PersonalCards from "../../Components/UI/personalCard/personalCard";
import img1 from "../../Media/yousef.jpg";
import img2 from "../../Media/bisan.png";
import img3 from "../../Media/yasmeen.jpg";
import img4 from "../../Media/amira.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const form = useRef();

  const clearInputs = () => {
    setEmail("");
    setName("");
    setMessage("");
    setTimeout(() => {
      setSnackbar(false);
    }, 3000);
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ltj2944",
        "Real_Estate_App",
        form.current,
        "user_D9y1Gws0dAtyKLW4zOemd"
      )
      .then(
        (res) => {
          console.log(res.text);
          setLoading(false);
          setSnackbar(true);
          clearInputs();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sCards = [
    {
      title: "سرعة الاستجابة",
      details: `يمكننا الرد في أسرع وقت ممكن، والتعامل بدقة كبيرة مع البلاغات الواردة إلينا، لكي نضمن حل جميع المشاكل والبلاغات في الوقت المناسب.`,
      icon: "fas fa-headset",
    },
    {
      title: "العمل الجماعي",
      details: `نمتلك فريق مهني وتقني عالي المهارة والخبرة، ويعتمد بشكل أساسي على روح الفريق والعمل الجماعي في أداء المهام وتنفيذها.`,
      icon: "fas fa-users",
    },
    {
      title: "دقة المواعيد",
      details: `يعد عامل الوقت أساساً في تعاملنا مع البلاغات لخطورة بعض البلاغات أحياناً، لذلك فإن طواقمنا تعمل على حل تحري الدقة في مواعيدها.`,
      icon: "fas fa-calendar-check",
    },
  ];

  const personalCards = [
    {
      name: "يوسف رشاد أبو عيشة",
      title: "Developer",
      img: img1,
      facebook: "https://www.facebook.com/yousef.aboesha.9/",
      email: "mailto:yousef.aboesha@hotmail.com",
      instagram: "https://www.instagram.com/yousef_aboesha/",
    },
    {
      name: "بيسان سعيد",
      title: "Developer",
      img: img2,
      facebook: "https://www.facebook.com/profile.php?id=100055213710052",
      email: "mailto:besanhosnysaid203998@gmail.com",
      instagram: "https://www.instagram.com/bisan.h.said/",
    },
    {
      name: "ياسمين علي البنا",
      title: "UI/UX",
      img: img3,
      facebook: "https://www.facebook.com/yasmeenbana88/",
      email: "mailto:yasmeenyb2@gmail.com",
      instagram: "https://www.instagram.com/yasmeenaalbana/",
    },
    {
      name: "أميرة نمر العمصي",
      title: "Graphic desgin",
      img: img4,
      facebook: "https://www.facebook.com/profile.php?id=100017073304560",
      email: "mailto:ameeraanaana42@gmail.com",
      instagram: "https://www.instagram.com/amiraamassi/",
    },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.home}>
        <Video vid={vid} text={"ابقَ على تواصلٍ معنا، وراسلنا !"} />
      </div>

      <div className={classes.container}>
        <section>
          <Heading
            title="من نحن"
            img="https://img.icons8.com/color/40/000000/under-computer.png"
          />

          <div className={classes.person}>
            <div className={classes.left}>
              <p>
                نحن فريق مهتم بإعلام الأفراد بالكوارث البيئية والمساهمة بحلها
                بشكل الكتروني سواءً كانت معقدة أو بسيطة، من خلال التبليغ عن
                المخاطر البيئية التي قد يواجهونها، و ما هي الإجراءات التي يمكنهم
                اتخاذها لحماية أرواحهم و أبنائهم، حيث تسمح لهم المعلومات الدقيقة
                المتوافرة في وقت مبكر من خلال موقعنا باتخاذ الخيارات و الإجراءات
                الازمة لحماية أنفسهم وأسرهم ومجتمعاتهم من الأخطار التي تهددهم، و
                الإبلاغ عن المخاطر، هو جزء لا يتجزأ من الاستجابة للكوارث وهو
                يتمثل في تبادل المعلومات و المشورة والآراء في الوقت الفعلي، حيث
                يسمح الإبلاغ الفعال عن المخاطر بأن يفهم الناس المعرضين للمخاطر
                ما هم بصدده و أن ينتهجوا سلوكيات وقائية تساعدهم في حل المشكلة.
              </p>
              <a>
                <button>تواصل معنا</button>
              </a>
            </div>
            <div className={classes.right}>
              <img src={img} alt="Best House" />
            </div>
          </div>
        </section>

        <section>
          <Heading
            title="ميزاتنا"
            img="https://img.icons8.com/external-flatart-icons-flat-flatarticons/40/000000/external-achievement-achievements-and-badges-flatart-icons-flat-flatarticons-2.png"
          />

          <div className={classes.cards}>
            {sCards.map((card, index) => {
              return (
                <ServicesCard
                  title={card.title}
                  details={card.details}
                  icon={card.icon}
                  key={index}
                />
              );
            })}
          </div>
        </section>

        <section>
          <Heading
            title="فريق العمل"
            img="https://img.icons8.com/fluency/40/000000/group.png"
          />
        </section>
        <div className={classes.cards}>
          {personalCards.map((elem, index) => {
            return (
              <PersonalCards
                name={elem.name}
                title={elem.title}
                img={elem.img}
                facebook={elem.facebook}
                email={elem.email}
                instagram={elem.instagram}
                key={index}
              />
            );
          })}
        </div>

        <section>
          <Heading
            title="تواصل معنا"
            img="https://img.icons8.com/external-itim2101-flat-itim2101/40/000000/external-contact-us-contact-and-message-itim2101-flat-itim2101-3.png"
          />

          <div className={classes.contact}>
            {snackbar ? (
              <Notistack msg={"You Have successfully sent an E-mail!"} />
            ) : null}

            <form ref={form} className={classes.right} onSubmit={ClickHandler}>
              <div className={classes.input}>
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  required
                />
              </div>

              <div className={classes.input}>
                <input
                  type="email"
                  placeholder="البريد الالكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  required
                />
              </div>

              <div className={classes.input}>
                <textarea
                  placeholder="الرسالة"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  required
                />
              </div>

              <button>{loading ? "  جارٍ الإرسال" : "إرسال"}</button>
            </form>

            <div className={classes.left}>
              <img src={contactImg} alt="Faw" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
