import React, { useEffect } from "react";
import styles from "./css/Selections.module.css";
function Selections({ selections, click, index, mbti, mbtichanger, pagenum }) {
  function changembti() {
    let newarr = mbti.concat();
    console.log(pagenum);
    if (pagenum <= 3) {
      if (index === 0) {
        newarr[0] = newarr[0] + 1;
        mbtichanger(newarr);
      } else {
        newarr[0] = newarr[0] - 1;
        mbtichanger(newarr);
      }
    } else if (pagenum > 3 && pagenum <= 6) {
      if (index === 0) {
        newarr[1] = newarr[1] + 1;
        mbtichanger(newarr);
      } else {
        newarr[1] = newarr[1] - 1;
        mbtichanger(newarr);
      }
    } else if (pagenum > 6 && pagenum <= 9) {
      if (index === 0) {
        newarr[2] = newarr[2] + 1;
        mbtichanger(newarr);
      } else {
        newarr[2] = newarr[2] - 1;
        mbtichanger(newarr);
      }
    } else if (pagenum > 9 && pagenum <= 12) {
      if (index === 0) {
        newarr[3] = newarr[3] + 1;
        mbtichanger(newarr);
      } else {
        newarr[3] = newarr[3] - 1;
        mbtichanger(newarr);
      }
    }
    click();
  }
  return (
    <div className={styles.box} onClick={changembti}>
      {selections}
    </div>
  );
}
export default Selections;
