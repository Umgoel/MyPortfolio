// import styles from "./Photos.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetImages from "../GetImages"
import React from "react";

const Photos = () => {
  return (
    <Routes>
      {/* Define your Route components here */}
      <Route path="/" element={<DisplayPic />} />
    </Routes>
  );
};

const DisplayPic = () => (
  <>
    {/* <h1>Hello World</h1> */}
    <GetImages />
  </>
);
export default Photos;
