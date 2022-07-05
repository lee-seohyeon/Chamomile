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
        <div className={styles.main}>
          {/* <div className={styles.title}>디저트 테스트</div> */}
          <div className={styles.text}>
            <p>나를 표현한다면 어떤 디저트일까?</p>
          </div>
          <img src={require(`../home/img/thinking.png`)} alt="d" />
          <Link to={"/quiz"} className={styles.goquiz}>
            퀴즈하러가기
          </Link>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default Mbtitest;
