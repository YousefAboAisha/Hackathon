// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWdcQzSlb5bVSPj2tpEXvdj3wBN8nigNM",
  authDomain: "hackathon-60cfb.firebaseapp.com",
  databaseURL: "https://hackathon-60cfb-default-rtdb.firebaseio.com",
  projectId: "hackathon-60cfb",
  storageBucket: "hackathon-60cfb.appspot.com",
  messagingSenderId: "648961753319",
  appId: "1:648961753319:web:2be41234936402e461a242",
  measurementId: "G-BNVC5FEJP7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
