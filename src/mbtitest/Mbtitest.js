import React from "react";
import styles from "./css/mbtitest.module.css";
import Navbar from "../nav/Navbar";
import Back from "../back/Back";
import { Link } from "react-router-dom";
function Mbtitest() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Back className={styles.fake}></Back>
          <div className={styles.title}> 디저트 MBTI </div>
          <div className={styles.fake}></div>
        </div>
        <hr></hr>
        <Link to={"/quiz"}>퀴즈하러가기</Link>
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default Mbtitest;
