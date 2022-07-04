import React from "react";
import styles from "./css/Selections.module.css";
function Selections({ selections, click, index, mbtichanger, pagenum }) {
  return (
    <div className={styles.box} onClick={click}>
      {selections}
    </div>
  );
}

export default Selections;
