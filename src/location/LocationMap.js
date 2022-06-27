import { useEffect } from "react";
import styles from "./css/LocationMap.module.css"
const {kakao} = window;
function Location(){
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            const mapContainer=document.getElementById('map');
            const lat=position.coords.latitude;
            const lon=position.coords.longitude;
            let mapOption={
                center: new kakao.maps.LatLng(lat,lon),
                level: 2
                };
            var map=new kakao.maps.Map(mapContainer,mapOption);
            var markerPosition  = new kakao.maps.LatLng(lat,lon); 
                var marker = new kakao.maps.Marker({
            position: markerPosition
            });
            marker.setMap(map);
        })
    },[]);
    return(
        <div className={styles.map} id="map"></div>
    );
}
export default Location;