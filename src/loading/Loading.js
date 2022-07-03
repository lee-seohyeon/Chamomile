import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={require(`./flower-remove.png`)} alt="flower"></img>
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
