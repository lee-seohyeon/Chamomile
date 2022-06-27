import styles from "./css/Around.module.css";
function Around({title,img}){
    return (
        <div className={styles.around}>
            <div className={styles.img}><img src={img} alt="alt"></img></div>
            <div className={styles.text}>{title}</div>
        </div>
    );
}
export default Around;