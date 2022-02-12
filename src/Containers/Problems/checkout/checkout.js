import React, { useEffect, useState, useRef } from "react";
import classes from "./checkout.module.css";
import Notistack from "../../../Components/UI/Snackbar/snackbar";
import axios from "axios";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Heading from "../../../Components/UI/heading/heading";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projectType, setProjectType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [msg, setMsg] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [chars, setChars] = useState(0);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  useEffect(() => {
    let charNum = msg.length;
    setChars(charNum);
  }, [msg]);

  const clearInputs = () => {
    setName("");
    setEmail("");
    setAddress("");
    setMsg("");
    setChars(0);
    setTimeout(() => {
      setSnackbar(false);
    }, 3000);
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      ProjectType: projectType,
      Name: name,
      Email: email,
      Address: address,
      Message: msg,
      status: "جارٍ العمل عليها",
      src: imageURL
        ? imageURL
        : "https://cdn.pixabay.com/photo/2019/12/27/08/36/page-not-found-4721931__340.png",
    };

    axios
      .post(
        "https://hackathon-60cfb-default-rtdb.firebaseio.com/problems.json",
        data
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

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadHandler(file);
  };

  const uploadHandler = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageURL(url);
          console.log("URL is =>", url);
        });
      }
    );
  };

  useEffect(() => {
    if (!file) {
      setError(true);
    } else {
      setError(false);
    }
  }, [file]);

  return (
    <div className={classes.wrapper}>
      {snackbar ? <Notistack msg={"تم إرسال الرسالة بنجاح !"} /> : null}

      <div className={classes.home}>
        <Heading
          title="إضافة بلاغ"
          img="https://img.icons8.com/bubbles/40/000000/form.png"
        />

        <form onSubmit={ClickHandler} id="mainForm" ref={form}>
          <div className={classes.input}>
            <select
              required
              onChange={(e) => setProjectType(e.target.value)}
              value={projectType}
              name="projectType"
            >
              <option hidden defaultValue>
                نوع المشكلة
              </option>
              <option>صرف صحي</option>
              <option>شارع مهدم</option>
              <option>تجمع برك مياه</option>
              <option> غير ذلك</option>
            </select>
          </div>

          <div className={classes.input}>
            <input
              type="text"
              placeholder="الاسم الكامل"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              minLength={4}
              name="name"
            />
          </div>

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
              type="text"
              placeholder="عنوان المنطقة"
              required
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              minLength={4}
              name="msgName"
            />
          </div>

          <div className={classes.input}>
            <textarea
              required
              placeholder="تفاصيل المشكلة"
              cols={20}
              rows={10}
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
              minLength={60}
              name="msg"
            ></textarea>
            <div
              className={classes.chars}
              style={{
                color: chars >= 60 ? "green" : "red",
              }}
            >
              60 / {chars}
            </div>
          </div>
        </form>

        <form onSubmit={formHandler}>
          <div className={classes.input}>
            <label>قم بإرفاق صورة </label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.value)}
              value={file}
            />
            {error ? (
              <span className={classes.error}>
                الرجاء إرفاق صورة، حتى يتم رفعها !
              </span>
            ) : null}
            <button type="submit">رفع الصورة </button>

            {imageURL ? (
              <span style={{ color: "green" }}> تم رفع الملف بنجاح ! </span>
            ) : (
              <span>تم رفع % {progress}</span>
            )}
          </div>
        </form>

        <button
          form="mainForm"
          disabled={imageURL && projectType !== "" ? false : true}
        >
          {loading ? " جارٍ الإبلاغ ..." : " إبلاغ"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
