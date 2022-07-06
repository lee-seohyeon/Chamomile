import React from "react";
import { useState, useEffect } from "react";
import styles from "./css/Tagbutton.module.css";
const Tagbutton = ({ text }) => {
  const [color, setcolor] = useState("white");
  const [like, islike] = useState(false);
  useEffect(() => {
    like ? setcolor("#F9E183 ") : setcolor("white");
  }, [like]);
  return (
    <div
      className={styles.content}
      style={{ backgroundColor: `${color}` }}
      onClick={() => {
        like ? islike(false) : islike(true);
      }}
    >
      {text}
    </div>
  );
};

export default Tagbutton;
