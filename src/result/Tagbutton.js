import React from "react";
import { useState, useEffect } from "react";
import styles from "./css/Tagbutton.module.css";
const Tagbutton = ({ text }) => {
  const [color, setcolor] = useState("white");
  const [like, islike] = useState(false);
  const [width,setwidth]=useState(1);
  const isLike=()=>{
    setcolor("#FFC700 ");
    setwidth("2px");
  };
  const isntLike=()=>{
    setcolor("#D9D9D9");
    setwidth("1px");
  };
  useEffect(() => {
    like ? isLike() : isntLike()
  }, [like]);
  return (
    <div
      className={styles.content}
      style={{ borderColor: `${color}`, borderWidth:`${width}`}}
      onClick={() => {
        like ? islike(false) : islike(true);
      }}
    >
      {text}
    </div>
  );
};

export default Tagbutton;
