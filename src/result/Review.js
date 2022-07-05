import styles from "./css/Review.module.css";
import products from "./products.json";
import { useParams } from "react-router-dom";
import Tag from "./Tag";

function Review(){
    const path = "./img/";
    const { name } = useParams();
    const searcharray = products;
    let i = 0;
    for (i = 0; i < searcharray.length; i++) {
      if (searcharray[i].name === name) {
        break;
      }
    }
    const data = searcharray[i];
    return(
        <>
            <div className={styles.titlebox}>
                <p className={styles.title}>후기</p>
                <div className={styles.writebox}>
                    <img src={require(`${path}pencil.png`)} className={styles.pencilimg} alt="noimg"></img>
                    <p className={styles.write}>작성하기</p>
                </div>
            </div>

            <div className={styles.reviewbox}>
                <div className={styles.tags}>
                        {data.tag.map((t) => (
                        <Tag key={t} tag={t}></Tag>
                        ))}
                </div>
                


            </div>

            <p className={styles.title}>이 가게 다른 메뉴 보기</p>

        </>
    );
}

export default Review;