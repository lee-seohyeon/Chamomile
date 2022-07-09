import styles from "./css/Review.module.css";
import Product from "./Product";
import ReviewTag from "./ReviewTag";
import { Link } from "react-router-dom";

function Review({ tag, shop }) {
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
          <div className={styles.im}>#꾸덕</div>
          {tag
            ? tag.map((t, i) => <ReviewTag key={i} tag={t.name}></ReviewTag>)
            : ""}
          <div className={styles.ima}>#견과류</div>
        </div>
      </div>
      <p className={styles.title}>이 가게 다른 메뉴 보기</p>
      <div className={styles.anotherimgbox}>
        {shop.map((data, i) => (
          <Link to={`/detail/${data.id}`}>
            <Product
              key={i}
              name={data && data.name}
              id={data && data.id}
              tag={data && data.tag_set}
              shopname={data && data.shop}
              likenum={data && data.likenum}
              distance={data && data.distance}
              price={data && data.price}
              img={data && data.img}
            ></Product>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Review;
