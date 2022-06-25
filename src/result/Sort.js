import styles from './css/Sort.module.css';
function Sort(){
    const bold=(e)=>{
        e.target.style.fontWeight="900";
        e.target.style.color="blue";
    }
    return (
        <div className={styles.container}>
        <div className={styles.review}
        onClick={bold}>리뷰많은순</div>
        <div className={styles.reach}
        onClick={bold}>거리순</div>
        <div className={styles.heart}
        onClick={bold}>찜순</div>
        <div className={styles.price}
        onClick={bold}>가격낮은순</div>
        </div>
        );
}
export default Sort;