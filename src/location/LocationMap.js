import { useEffect, useState } from "react";
import styles from "./css/LocationMap.module.css";
const { kakao } = window;
function Location({ setData, setLocation }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
          level: 4, // 지도의 확대 레벨
        };
      // 지도를 생성합니다
      var map = new kakao.maps.Map(mapContainer, mapOption);
      var ps = new kakao.maps.services.Places(map);
      ps.categorySearch("CE7", placesSearchCB, { useMapBounds: true });
      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
          }
          setData(data);
        }
      }
      // 지도에 마커를 표시하는 함수입니다
      function displayMarker(place) {
        // 마커를 생성하고 지도에 표시합니다

        var imageSrc = require(`../loading/flower-remove.png`), // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) };
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          image: markerImage,
        });
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });
      }
      setLocation([lat, lon]);
    });
  }, []);
  return <div className={styles.map} id="map"></div>;
}
export default Location;
