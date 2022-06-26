import styles from './css/Category.module.css';
function Category(){
    const path='./img/';
    return (
        <div className={styles.category}>
        <div className={styles.option}><img src={require(`${path}bread.png`)} className={styles.img} alt="빵"></img>빵</div>
        <div className={styles.option}><img src={require(`${path}shaved ice.png`)} className={styles.img} alt="마카롱"/>빙수</div>
        <div className={styles.option}><img src={require(`${path}macaron.png`)} className={styles.img} alt="마카롱"/>마카롱</div>
        <div className={styles.option}><img src={require(`${path}birthday-cake.png`)} className={styles.img} alt="마카롱"/>케이크</div>
        <div className={styles.option}><img src={require(`${path}icecream.png`)} className={styles.img} alt="마카롱"/>아이스크림</div>
        <div className={styles.option}><img src={require(`${path}cookie.png`)} className={styles.img} alt="마카롱"/>쿠키</div>
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