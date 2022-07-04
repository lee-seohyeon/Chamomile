import React from "react";
import styles from "./css/Questionbox.module.css";
const Questionbox = ({ question }) => {
  return <div className={styles.box}>{question}</div>;
};

export default Questionbox;
