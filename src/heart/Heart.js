import Header from "./Header";
import Navbar from "../nav/Navbar";
import styles from "./css/Heart.module.css";
import products from "../result/products.json"

function Heart({ name, tag, shopname, likenum, distance, price, img }) {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            <Header></Header>
            <Navbar></Navbar>

    {/* <div className={styles.section}>
        <div className={styles.shopanddistance}>
          <div className={styles.shopname}>[ {shopname} ]</div>
          <div className={styles.distance}>
            <img src={require(`./img/pin.png`)} alt="pin"></img>
            <div className={styles.distnum}>{distance}</div>m
          </div>
        </div>
        <div className={styles.name}>{name}</div>

        <div className={styles.floor}>
            <div className={styles.price}>{price}원</div>
            <div className={styles.likenum}>
                <img className={styles.ch} src={require(`./img/colored-heart.png`)} alt="noimg"></img>
                {likenum}
            </div>
        </div>
      </div> */}

        </div>
    </div>
  );
}
export default Heart;
