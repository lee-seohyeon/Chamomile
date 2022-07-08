import styles from "./css/Review.module.css";
import products from "./products.json";
import { useParams } from "react-router-dom";
import Tag from "./Tag";
import { Link } from "react-router-dom";

function Review({ tag }) {
  const path = "./img/";
  return (
    <>
      <div className={styles.titlebox}>
        <p className={styles.title}>후기</p>
        <div className={styles.writebox}>
          <img
            src={require(`${path}pencil.png`)}
            className={styles.pencilimg}
            alt="noimg"
          ></img>
          <Link to="/Write">
            <p className={styles.write}>작성하기</p>
          </Link>
        </div>
      </div>

      <div className={styles.reviewbox}>
        <div className={styles.tags}>
          {tag ? tag.map((t) => <Tag key={t} tag={t.name}></Tag>) : ""}
        </div>
      </div>

      <p className={styles.title}>이 가게 다른 메뉴 보기</p>
      <div className={styles.anotherimgbox}>
        <img
          src={require(`${path}another1.png`)}
          className={styles.anotherimg}
          alt="noimg"
        ></img>
        <img
          src={require(`${path}another2.png`)}
          className={styles.anotherimg}
          alt="noimg"
        ></img>
      </div>
    </>
  );
}

export default Review;
