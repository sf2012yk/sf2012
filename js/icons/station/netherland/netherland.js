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

// ES01 Amsterdam Centraal駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="image/map/station/Amsterdam.JPG" 
       data-lightbox="image" 
       data-title="Brussel">
      <img class="popup_img" loading="eager" src="image/map/station/Amsterdam.JPG" alt="Brussel Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Amsterdam.JPG" data-lightbox="image" data-title="Brussel Station" class="popup_link">Antwerp Central Station</a>
    <p>
    アムステルダム駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="BrusselToStPancrasCard">
    <p class="next_text">◀ London（370km）</span>
    </div>
    <div class="next_card" id="BrusselToAntwerpCard">
    <p class="next_text">▲ Antwerp（50km）</span>
    </div>
    <div class="next_card" id="BrusselToCologneCard">
    <p class="next_text">▶ Cologne（230km）</span>
    </div>
    </div>
  </div>
`;
var markerAmsterdam = L.marker([52.37916601980573, 4.900256248250418], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);