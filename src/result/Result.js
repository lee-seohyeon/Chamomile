import { useParams } from "react-router-dom";
import Searchbar from "../search/Searchbar";
import Sort from "./Sort";
import Navbar from "../nav/Navbar";
import styles from "./css/Result.module.css";
import Product from "./Product";
import { useEffect, useState } from "react";
import products from "./products.json";
import { Link } from "react-router-dom";
function Result() {
  const { text } = useParams();
  const [keyword, setkeyword] = useState([]);
  useEffect(() => {
    if (text.includes("초코")) {
      setkeyword(products.chococookies);
    } else if (text.includes("말차")) {
      setkeyword(products.malcookies);
    } else if (text.includes("쿠키")) {
      setkeyword([...products.malcookies, ...products.chococookies]);
    } else {
      alert("검색결과가 없습니다!");
      window.history.back();
    }
  }, []);
  return (
    <div className={styles.background}>
      <Navbar></Navbar>
      <div className={styles.container}>
        <Searchbar place={text}></Searchbar>
        <Sort></Sort>
        <div className={styles.products}>
          {keyword.map((data, i) => (
            <Link to={`/detail/${data.name}`}>
              <Product
                key={i}
                name={data.name}
                tag={data.tag}
                shopname={data.shopname}
                likenum={data.likenum}
                distance={data.distance}
                price={data.price}
                img={data.img}
              ></Product>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Result;
