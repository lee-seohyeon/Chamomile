import React from "react";
import styles from "./css/Post.module.css";
const Post = ({ title, date }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postcontainer}>
        <div className={styles.posttextcontainer}>
          <p className={styles.posttitle}>{title}</p>
          <p className={styles.postdate}>{date}</p>
        </div>
        <div className={styles.postgo}> &gt; </div>
      </div>
      <hr className={styles.postline}></hr>
    </div>
  );
};

export default Post;
