import styles from "./css/Product.module.css";
import Tag from "./Tag";
function Product({ name, tag, shopname, likenum, distance, price, img }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={require(`${img}`)} alt="alt"></img>
      </div>
      <div className={styles.tagandlike}>
        <div className={styles.tags}>
          {tag.map((t) => (
            <Tag key={t} tag={t}></Tag>
          ))}
        </div>
        <div className={styles.likenum}>💛{likenum}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.shopanddistance}>
          <div className={styles.shopname}>[ {shopname} ]</div>
          <div className={styles.distance}>
            <img src={require(`./img/pin.png`)} alt="pin"></img>
            <div className={styles.distnum}>{distance}</div>m
          </div>
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}원</div>
      </div>
    </div>
  );
}
export default Product;
