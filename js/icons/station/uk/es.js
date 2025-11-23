// Icons module

  //主要駅（station）アイコン：
    var stationIcon = L.icon({
    iconUrl: "image/icon/train.png",
    iconRetinaUrl:"image/icon/train@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station"
    });

     //通過駅等（station_2）アイコン：
    var station_2_Icon = L.icon({
    iconUrl: "image/icon/train_2.png",
    iconRetinaUrl:"image/icon/train_2@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station_2"
    });

//  St Pancras
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/StPancrass.JPG" 
       data-lightbox="image" 
       data-title="St Pancras">
      <img class="popup_img" loading="eager" src="image/map/station/StPancrass.JPG" alt="St Pancras Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/StPancrass.JPG" data-lightbox="image" data-title="St Pancras Station" class="popup_link">St Pancras Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="StPancrasToBrusselCard">
    <p class="next_text">▶ Brussel（370km）</span>
    </div>
    <div class="next_card" id="StPancrasToParisCard">
    <p class="next_text">▼ Paris（400km）</span>
    </div>
    </div>
  </div>
`;
var markerStPancras = L.marker([51.531403145750126, -0.126309026898089], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);