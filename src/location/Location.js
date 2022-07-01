import LocationMap from "./LocationMap";
import styles from "./css/Location.module.css";
import Navbar from "../nav/Navbar";
import Around from "./Around";
import { useState } from "react";
import Back from "../back/Back";
function Location() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState([]);
  console.log(data);
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Back className={styles.fake}></Back>
          <div className={styles.title}>내위치</div>
          <div className={styles.fake}></div>
        </div>
        <hr></hr>
        <LocationMap setData={setData} setLocation={setLocation}></LocationMap>
        <Navbar></Navbar>
        <hr></hr>
        <div className={styles.text}>
          주변 가게
          <div className={styles.around}>
            {data.slice(0, 10).map((d) => (
              <Around
                key={d.place_name}
                name={d.place_name}
                address={d.address_name}
                phone={d.phone}
                now={location}
                y={d.x}
                x={d.y}
              ></Around>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Location;
