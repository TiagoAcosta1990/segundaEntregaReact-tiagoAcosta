import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQH0sG6QcPdOCrmT9Tsr8XqgYtpWe9cD8",
  authDomain: "proyecto-final-react-40d7a.firebaseapp.com",
  projectId: "proyecto-final-react-40d7a",
  storageBucket: "proyecto-final-react-40d7a.appspot.com",
  messagingSenderId: "531824800204",
  appId: "1:531824800204:web:073030a5a9d1ca59596d69"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
