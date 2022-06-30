import { useParams } from "react-router-dom";
import Back from "../back/Back";
import products from "./products.json";
import styles from "./css/Detail.module.css";
import Tag from "./Tag";
import Locationmap from "../location/LocationMap";
function Detail() {
  const { name } = useParams();
  const searcharray = [...products.chococookies, ...products.malcookies];
  let i = 0;
  for (i = 0; i < searcharray.length; i++) {
    if (searcharray[i].name === name) {
      break;
    }
  }
  const data = searcharray[i];
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Back></Back>
        </header>
        <hr></hr>
        <div className={styles.productinfo}>
          <img src={require(`${data.img}`)} alt="alt"></img>
          <div className={styles.line1}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.price}>{data.price} 원</div>
          </div>
          <div className={styles.tags}>
            {data.tag.map((t) => (
              <Tag key={t} tag={t}></Tag>
            ))}
          </div>
          <div className={styles.section}>
            <div className={styles.introduce}>메뉴 간단 설명</div>
            <div className={styles.map}>
              <Locationmap></Locationmap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
