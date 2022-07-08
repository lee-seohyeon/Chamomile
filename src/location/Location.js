import LocationMap from "./LocationMap";
import styles from "./css/Location.module.css";
import Navbar from "../nav/Navbar";
import Around from "./Around";
import { useState } from "react";
import Back from "../back/Back";
import Loading from "../loading/Loading";
import Story from "./Story";
const { kakao } = window;
function Location() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [address, setaddress] = useState("");
  function getAddr(lat, lng) {
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(lat, lng);
    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setaddress(result[0].address.address_name);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }
  getAddr(location[0], location[1]);
  return (
    <div className={styles.background}>
      {data.length !== 0 ? "" : <Loading></Loading>}
      <div className={styles.container}>
        <div className={styles.header}>
          <Back className={styles.fake}></Back>
          <div className={styles.title}>내 주변</div>
          <div className={styles.fake}></div>
        </div>
        <div className={styles.address}>{address}</div>
        <hr></hr>
        <LocationMap setData={setData} setLocation={setLocation}></LocationMap>

        <Navbar></Navbar>
        <hr></hr>
        <div
          className={styles.cat}
          onClick={() => {
            toggle ? setToggle(false) : setToggle(true);
          }}
        >
          <div className={styles.text}>주변 가게</div>
          <img
            src={
              toggle ? require(`./img/cancel.png`) : require(`./img/toggle.png`)
            }
            alt="z"
          ></img>
        </div>

        <div className={styles.around}>
          {toggle
            ? data
                .slice(0, 10)
                .map((d) => (
                  <Around
                    key={d.place_name}
                    name={d.place_name}
                    address={d.address_name}
                    phone={d.phone}
                    now={location}
                    y={d.x}
                    x={d.y}
                  ></Around>
                ))
            : ""}
        </div>
        <hr></hr>
        <div className={styles.cat}>
          <div className={styles.text}></div>
        </div>
        <Story>지금 여기!</Story>
      </div>
    </div>
  );
}
export default Location;
