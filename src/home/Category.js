import styles from "./css/Category.module.css";
import { Link } from "react-router-dom";
function Category() {
	const path = "./img/";
	return (
		<>
			<div className={styles.dom}>
				<div className={styles.category}>
					<Link to="/result/빵" className={styles.option}>
						<img
							src={require(`${path}bread.png`)}
							className={styles.img}
							alt="빵"
						></img>
						빵
					</Link>

					<Link to="/result/빙수" className={styles.option}>
						<img
							src={require(`${path}shaved ice.png`)}
							className={styles.img}
							alt="빙수"
						/>
						빙수
					</Link>
					<Link to="/result/마카롱" className={styles.option}>
						<img
							src={require(`${path}macaron.png`)}
							className={styles.img}
							alt="마카롱"
						/>
						마카롱
					</Link>
					<Link to="/result/케이크" className={styles.option}>
						<img
							src={require(`${path}birthday-cake.png`)}
							className={styles.img}
							alt="케이크"
						/>
						케이크
					</Link>
					<Link to="/result/아이스크림" className={styles.option}>
						<img
							src={require(`${path}icecream.png`)}
							className={styles.img}
							alt="아이스크림"
						/>
						아이스크림
					</Link>
					<Link to="/result/쿠키" className={styles.option}>
						<img
							src={require(`${path}cookie.png`)}
							className={styles.img}
							alt="쿠키"
						/>
						쿠키
					</Link>

					<Link to="/result/스콘" className={styles.option}>
						<img
							src={require(`${path}scone.png`)}
							className={styles.imgscone}
							alt="스콘"
						/>
						스콘
					</Link>
					{/* <Link to="/result/당고" className={styles.option}>
        <img
          src={require(`${path}dango.png`)}
          className={styles.img}
          alt="스콘"
        />
        당고
      </Link> */}
					<Link to="/result/떡" className={styles.option}>
						<img
							src={require(`${path}ricecake.png`)}
							className={styles.imgrice}
							alt="스콘"
						/>
						떡
					</Link>
					<Link to="/result/파르페" className={styles.option}>
						<img
							src={require(`${path}parfait.png`)}
							className={styles.imgpar}
							alt="스콘"
						/>
						파르페
					</Link>

					<Link to="/result/타르트" className={styles.option}>
						<img
							src={require(`${path}tart.png`)}
							className={styles.imgegg}
							alt="스콘"
						/>
						에그타르트
					</Link>

					<Link to="/result/와플" className={styles.option}>
						<img
							src={require(`${path}waffle.png`)}
							className={styles.waffle}
							alt="스콘"
						/>
						와플/크로플
					</Link>

					<Link to="/result/떡" className={styles.option}>
						<img
							src={require(`${path}moreview.png`)}
							className={styles.imgplus}
							alt="스콘"
						/>
						더보기
					</Link>
				</div>
			</div>
		</>
	);
}
export default Category;
