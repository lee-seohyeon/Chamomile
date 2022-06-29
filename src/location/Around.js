import styles from "./css/Around.module.css";
import { useState ,useEffect} from "react";
function Around({ name, address, phone }) {
  return (
    <div className={styles.around}>
      <div className={styles.name}>{name}</div>
      <div className={styles.address}>{address}</div>
      {phone ? <div className={styles.phone}>{phone}</div> : ""}
    </div>
  );
}
export default Around;
