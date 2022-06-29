import { useParams } from "react-router-dom";
import Searchbar from "../search/Searchbar";
import Sort from "./Sort";
import Navbar from "../nav/Navbar";
import styles from "./css/Result.module.css";
import Product from "./Product";
import { useEffect, useState } from "react";
function Result(){
    const {text}=useParams();
    const [keyword,setkeyword]=useState([]);
    const products={
        malcookies:[
            {
                name:"말차쿠키",
                tag:["꾸덕","비건"],
                shopname:"베이커리 모모",
                likenum:30,
                distance:30,
                price:2500,
                img:"./img/greentea-1.png"
            },
            {
                name:"하동녹차쿠키",
                tag:["하동","비건"],
                shopname:"카페 Yound",
                likenum:50,
                distance:50,
                price:2000,
                img:"./img/greentea-2.jpg"
            },
            {
                name:"그린티 쿠키",
                tag:["바삭","유기농"],
                shopname:"카페 다시, 봄",
                likenum:20,
                distance:100,
                price:3000,
                img:"./img/greentea-3.jpg"
            }
        ],
        chococookies:[
            {
                name:"초코칩 쿠키",
                tag:["촉촉","수제"],
                shopname:"카페 aha",
                likenum:10,
                distance:40,
                price:2200,
                img:"./img/choco-1.png"
            },
            {
                name:"더블 초코 쿠키",
                tag:["다크","비건"],
                shopname:"카페 young",
                likenum:25,
                distance:120,
                price:2000,
                img:"./img/choco-2.png"
            },
            {
                name:"초콜릿 쿠키",
                tag:["다크","비건"],
                shopname:"카페 다시, 봄",
                likenum:35,
                distance:140,
                price:1800,
                img:"./img/choco-3.jpg"
            }
        ]
    }
        useEffect(()=>{
            if (text.includes("초코")){
                setkeyword(products.chococookies);
            }
            else if(text.includes("말차")){
                setkeyword(products.malcookies);
            }
            else if(text.includes("쿠키")){
                setkeyword([...products.malcookies,...products.chococookies]);
            }
            else{
                alert("검색결과가 없습니다!");
                window.history.back();
            }
        },[]);
    return (
        <div className={styles.background}>
            <Navbar></Navbar>
            <div className={styles.container}>
            <Searchbar place={text}></Searchbar>
            <Sort></Sort>
            <div className={styles.products}>
            {
                keyword.map((data)=>(
                    <Product
                    key={data.name}
                    name={data.name}
                    tag={data.tag}
                    shopname={data.shopname}
                    likenum={data.likenum}
                    distance={data.distance}
                    price={data.price}
                    img={data.img}></Product>
                ))
            }
            </div>
            </div>
        </div>
    );
}
export default Result;