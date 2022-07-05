import { useParams } from "react-router-dom";
import Back from "../back/Back";
import products from "./products.json";
import styles from "./css/Detail.module.css";
import Tag from "./Tag";
import LocationMap from "../location/LocationMap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../nav/Navbar";
import Review from "../result/Review"


function Detail() {
  const path = "./img/";
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
    like ? setcolor("#F9E183 ") : setcolor("white");
  }, [like]);
  return (
    <div className={styles.background}>
      <Navbar></Navbar>
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
          <div className={styles.name}>{data.name}</div>
          <Link to="/search" className={styles.search}>
            <img src={require("./img/search.png")} alt="alt"></img>
          </Link>
        </header>

        <img
          className={styles.menuimg}
          src={require(`${data.img}`)}
          alt="alt"
        ></img>
        
        <div className={styles.mainbox}>
            <div className={styles.box}>
                <div className={styles.pricetext}>가격</div>
                <div className={styles.price}>{data.price}원</div>
            </div>

                <div className={styles.box}>
                    <div className={styles.keyword}>키워드</div>
                    <div className={styles.tags}>
                        {data.tag.map((t) => (
                        <Tag key={t} tag={t}></Tag>
                        ))}
                    </div>
                </div>

            <div className={styles.box}>
                <div className={styles.liketext}>좋아요</div>
                <div className={styles.like}>
                    <img src={require(`${path}colored-heart.png`)} className={styles.himg} alt="noimg"></img>
                    <div className={styles.likenum}>{data.likenum}</div>
                </div>
            </div>
        </div>
        {/* 메인박스 끝 */}

        <div className={styles.productinfo}>

          <div className={styles.introduce}>
            <p>대충 맛있다는 내용입니다.</p>
            <p>대충 맛있다는 내용이라구요.</p>
            <div className={styles.line1}></div>
          </div>
          <br></br>

          <div className={styles.section}>
            <div className={styles.marketname}>
              🏠 {market && market.place_name}
            </div>
            <div className={styles.map}>
              <LocationMap
                setData={setD}
                setLocation={setLocation}
              ></LocationMap>
            </div>
            <div className={styles.phone}>📞 {market && market.phone}</div>
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
        <Review></Review>
      </div>
    </div>
  );
}
export default Detail;
