import styles from './css/Category.module.css';
function Category(){
    const path='./img/';
    return (
        <div className={styles.category}>
          <div className={styles.option}><img src={require(`${path}bread.png`)} className={styles.img} alt="빵"></img>빵</div>
          <div className={styles.option}><img src={require(`${path}shaved ice.png`)} className={styles.img} alt="빙수"/>빙수</div>
          <div className={styles.option}><img src={require(`${path}macaron.png`)} className={styles.img} alt="마카롱"/>마카롱</div>
          <div className={styles.option}><img src={require(`${path}birthday-cake.png`)} className={styles.img} alt="케이크"/>케이크</div>
          <div className={styles.option}><img src={require(`${path}icecream.png`)} className={styles.img} alt="아이스크림"/>아이스크림</div>
          <div className={styles.option}><img src={require(`${path}cookie.png`)} className={styles.img} alt="쿠키"/>쿠키</div>
          <div className={styles.option}><img src={require(`${path}scone.png`)} className={styles.img} alt="스콘"/>스콘</div>
          <div className={styles.option}><img src={require(`${path}dango.png`)} className={styles.img} alt="스콘"/>당고</div>
          <div className={styles.option}><img src={require(`${path}ricecake.png`)} className={styles.imgrice} alt="스콘"/>떡</div>
          <div className={styles.option}><img src={require(`${path}parfait.png`)} className={styles.imgpar} alt="스콘"/>파르페</div>
          <div className={styles.option}><img src={require(`${path}tart.png`)} className={styles.imgegg} alt="스콘"/>에그타르트</div>
          <div className={styles.option}><img src={require(`${path}waffle.png`)} className={styles.img} alt="스콘"/>와플/크로플</div>
        </div>
    );
}
export default Category;
