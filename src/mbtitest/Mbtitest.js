import React from 'react'
import styles from './css/mbtitest.module.css';
import Navbar from "../nav/Navbar";
import Back from '../back/Back';
import Realtest from './Realtest';

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
        <Realtest></Realtest>
        <Navbar></Navbar>
      </div>
    </div>
  )
}

export default Mbtitest