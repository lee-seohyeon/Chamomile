import styles from './css/Category.module.css';
function Category(){
    return (
        <div className={styles.category}>
        <div className={styles.option}>빵</div>
        <div className={styles.option}>빙수</div>
        <div className={styles.option}>마카롱</div>
        <div className={styles.option}>케이크</div>
        <div className={styles.option}>아이스크림</div>
        <div className={styles.option}>쿠키</div>
        <div className={styles.option}>스콘</div>
        <div className={styles.option}>당고</div>
        <div className={styles.option}>떡</div>
        <div className={styles.option}>파르페</div>
        <div className={styles.option}>에그타르트</div>
        <div className={styles.option}>와플/크로플</div>
      </div>
    );
}
export default Category;