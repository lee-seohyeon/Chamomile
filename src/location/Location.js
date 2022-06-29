import LocationMap from "./LocationMap";
import styles from "./css/Location.module.css";
import Navbar from "../nav/Navbar";
import Around from "./Around";
import { useState, useEffect } from "react";
function Location() {
  const [data, setData] = useState([]);
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>내위치</div>
        <hr></hr>
        <LocationMap setData={setData}></LocationMap>
        <Navbar></Navbar>
        <hr></hr>
        <div className={styles.text}>
          주변 가게
          {data.slice(0, 10).map((d) => (
            <Around
              key={d.place_name}
              name={d.place_name}
              address={d.address_name}
              phone={d.phone}
            ></Around>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Location;
