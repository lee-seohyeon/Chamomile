import { useParams } from "react-router-dom";
import Searchbar from "../search/Searchbar";
import Navbar from "../nav/Navbar";
import styles from "./css/Result.module.css";
import Product from "./Product";
import { useState } from "react";
import products from "./products.json";
import { Link } from "react-router-dom";
import Back from "../back/Back";

function Result() {
  const path = "./img/";
  const { text } = useParams();
  const [keyword, setkeyword] = useState(products);
  console.log(products);
  function sorting(sort) {
    const sortarr = keyword.concat();
    if (sort === "1") {
      setkeyword((keyword) =>
        sortarr.sort((a, b) => {
          return a.distance - b.distance;
        })
      );
    } else if (sort === "2") {
      setkeyword((keyword) =>
        sortarr.sort((a, b) => {
          return a.reviewnum - b.reviewnum;
        })
      );
    } else if (sort === "3") {
      setkeyword((keyword) =>
        sortarr.sort((a, b) => {
          return b.likenum - a.likenum;
        })
      );
    } else if (sort === "4") {
      setkeyword((keyword) =>
        sortarr.sort((a, b) => {
          return a.price - b.price;
        })
      );
    }
  }
  const SET = (e) => {
    console.log(e.target.value);
    sorting(e.target.value);
  };
  return (
    <div className={styles.background}>
      <Navbar></Navbar>
      <div className={styles.container}>
        
      <header>
          <Back className={styles.fake}></Back>
          <div className={styles.hebox}>
            <img src={require(`${path}search.png`)} className={styles.searchimg} alt="noimg"></img>
            <div className={styles.title}></div>
                <Searchbar place={text}></Searchbar>
            <img src={require(`${path}del.png`)} className={styles.delimg} alt="noimg"></img>
          </div>
      </header>
        
        <div className={styles.sort}>
          <img src={require(`./img/sort.png`)} alt="img"></img>
          <select onChange={SET}>
            <option value="1">가까운 순 </option>
            <option value="2">리뷰 많은 순</option>
            <option value="3">찜 많은 순</option>
            <option value="4">가격 낮은 순</option>
          </select>
        </div>
        <div className={styles.products}>
          {keyword.map((data, i) => (
            <Link to={`/detail/${data.name}`}>
              <Product
                key={i}
                name={data && data.name}
                tag={data && data.tag}
                shopname={data && data.shopname}
                likenum={data && data.likenum}
                distance={data && data.distance}
                price={data && data.price}
                img={data && data.img}
              ></Product>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Result;
