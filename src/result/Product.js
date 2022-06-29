import styles from "./css/Product.module.css";
import Tag from "./Tag";
function Product({name, tag,shopname,likenum,distance,price,img}){
    return(
        <div className={styles.container}>
            <div className={styles.img}><img src={require(`${img}`)} alt="alt"></img></div>
            <div className={styles.tag}>
                {
                    tag.map((t)=>(
                        <Tag key={t}
                        tag={t}></Tag>
                    ))
                }
            </div>
            <div className={styles.shopname}>{shopname}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.likenum}>💛{likenum}</div>
            <div className={styles.distance}>당신으로부터<div className={styles.distnum}>{distance}</div>m</div>
            <div className={styles.price}>{price}원</div>
        </div>
    );
}
export default Product