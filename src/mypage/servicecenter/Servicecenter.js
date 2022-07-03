import React from "react";
import styles from "./css/Service.module.css";
import Back from "../../back/Back";
import Navbar from "../../nav/Navbar";
const Servicecenter = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Back className={styles.fake}></Back>
          <div className={styles.title}>고객센터</div>
          <div className={styles.fake}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>자주 묻는 질문</div>
          <div className={styles.postgo}> &gt; </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>이메일 문의</div>
          <div className={styles.postgo}> &gt; </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>서비스 이용약관</div>
          <div className={styles.postgo}> &gt; </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>개인정보 처리 방침</div>
          <div className={styles.postgo}> &gt; </div>
        </div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Servicecenter;
