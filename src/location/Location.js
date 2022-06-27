import LocationMap from "./LocationMap";
import styles from "./css/Location.module.css";
import Navbar from "../nav/Navbar";
import Around from "./Around";
function Location(){
    const list=[
        {title:"투썸플레이스", img:"http://dc.wecook.co.kr/wp-content/uploads/2021/11/246_shop1_786927.jpg"},
        {title : "할리스 커피", img:"https://health.chosun.com/fileupload/healthcare_news/mdtoday_202103/20210315140214_20210315115050_604ecb8aae419_1.jpg"}
    ];
    return (
        <div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.title}>내위치</div>
            <hr></hr>
            <LocationMap></LocationMap>
            <Navbar></Navbar>
            <hr></hr>
            <div className={styles.text}>주변 가게
            {list.map((data)=>(
                <Around key={data.title}
                title={data.title} 
                img={data.img}>
                </Around>))
            }
            </div>
        </div>
    </div>
    );
}
export default Location;