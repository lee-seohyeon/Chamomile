import { useParams } from "react-router-dom";
import Back from "../back/Back";
import products from "./products.json";
import styles from "./css/Detail.module.css";
import Tag from "./Tag";
import LocationMap from "../location/LocationMap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail() {
  const { name } = useParams();
  const searcharray = products;
  let i = 0;
  for (i = 0; i < searcharray.length; i++) {
    if (searcharray[i].name === name) {
      break;
    }
  }
  const [D, setD] = useState([]);
  const [location, setLocation] = useState([]);
  const data = searcharray[i];
  const market = D[0];
  const copy = () => {
    navigator.clipboard.writeText(market.address_name);
  };
  const [color, setcolor] = useState("white");
  const [like, islike] = useState(false);
  useEffect(() => {
    like ? setcolor("red") : setcolor("white");
  }, [like]);
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.fix}>
          <div
            className={styles.likebutton}
            style={{ backgroundColor: `${color}` }}
            onClick={() => {
              like ? islike(false) : islike(true);
            }}
          >
            <img src={require(`./img/heart.png`)} alt="tal"></img>
          </div>
        </div>
        <header className={styles.header}>
          <Back></Back>
          <Link to="/search" className={styles.search}>
            <img src={require("./img/search.png")} alt="alt"></img>
          </Link>
        </header>
        <hr></hr>
        <img
          className={styles.menuimg}
          src={require(`${data.img}`)}
          alt="alt"
        ></img>
        <div className={styles.productinfo}>
          <div className={styles.line1}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.price}>{data.price} 원</div>
          </div>
          <div className={styles.tags}>
            {data.tag.map((t) => (
              <Tag key={t} tag={t}></Tag>
            ))}
          </div>
          <div className={styles.introduce}>메뉴 간단 설명</div>
          <div>
            (대충 맛있다는 내용 대충 맛있다는 내용 대충 맛있다는 내용 대충
            맛있다는 내용 대충 맛있다는 내용 대충 맛있다는 내용 대충 맛있다는
            내용 대충 맛있다는 내용 대충 맛있다는 내용 대충 맛있다는 내용 대충
            맛있다는 내용)
          </div>
          <div className={styles.section}>
            <div className={styles.marketname}>
              🏠{market && market.place_name}
            </div>
            <div className={styles.map}>
              <LocationMap
                setData={setD}
                setLocation={setLocation}
              ></LocationMap>
            </div>
            <div className={styles.phone}>📞{market && market.phone}</div>
            <div className={styles.address}>
              📍{market && market.address_name}
              <button
                className={styles.copy}
                onClick={() => {
                  alert("복사완료!");
                  copy();
                }}
              >
                <img src={require(`./img/copy.png`)} alt="alt"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
