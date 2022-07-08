import { useParams } from "react-router-dom";
import Searchbar from "../search/Searchbar";
import Navbar from "../nav/Navbar";
import styles from "./css/Result.module.css";
import Product from "./Product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Back from "../back/Back";

function Result() {
  const { text } = useParams();
  const [keyword, setkeyword] = useState([]);
  const getproducts = async () => {
    const response = await fetch(
      `http://api-chamomile.kro.kr/products/?name=${text}`
    );
    const json = await response.json();
    likenum(json.data);
  };
  const path = "./img/";

  useEffect(() => getproducts, []);

  function likenum(arr) {
    for (let x = 0; x < arr.length; x++) {
      console.log(arr[x].name.length);
      if (arr[x].name.length > 7) {
        arr[x].name = arr[x].name.substring(0, 6) + "...";
      }
      arr[x]["distance"] = (arr.length - x) * 10;
      arr[x]["reviewnum"] = (arr.length - x) * 10;
    }
    console.log(arr);
    setkeyword(arr);
  }
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
        <div className={styles.header}>
          <Back className={styles.fake}></Back>
          <div className={styles.hebox}>
            <img
              src={require(`${path}search.png`)}
              className={styles.searchimg}
              alt="noimg"
            ></img>
            <div className={styles.title}></div>
            <Searchbar place={text}></Searchbar>
            <img
              src={require(`${path}del.png`)}
              className={styles.delimg}
              alt="noimg"
            ></img>
          </div>
          <Link to="/Filterpage"><img src={require(`${path}filter.png`)} className={styles.filterimg} alt="noimg"></img> </Link>
          
        </div>

        <img
          src={require(`./img/tagbar.png`)}
          className={styles.tagbar}
          alt="img"
        ></img>

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
      </div>
    </div>
  );
}
export default Result;
