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

// LGV01 Paris Gare de Lyon駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="image/map/station/ParisLyon.jpg" 
       data-lightbox="image" 
       data-title="ParisLyon">
      <img class="popup_img" loading="eager" src="image/map/station/ParisLyon.jpg" alt="Paris Lyon Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/ParisLyon.jpg" data-lightbox="image" data-title="Paris Lyon Station" class="popup_link">Paris Lyon Station</a>
    <p>
    パリリヨン駅について
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Destnation</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="goToLyonCard">
    <p class="next_text">▼ Lyon (420km)</span>
    </div>
    <div class="next_card" id="ParisToMarseilleCard">
    <p class="next_text">▼ Marseille (720km)</span>
    </div>
    <div class="next_card" id="ParisToBaselCard">
    <p class="next_text">▼ Basel (600km)</span>
    </div>
    </div>
  </div>
`;
var markerParisLyon = L.marker([48.84423772852879, 2.3753086448157688], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// LGV01 Lyon Part Dieu駅：
    var popupContent = `

    <div class="popup_summer">
    <a href="image/map/station/Lyon.jpg" 
       data-lightbox="image" 
       data-title="Lyon Part Dieu">
      <img class="popup_img" loading="eager" src="image/map/station/Lyon.jpg" alt="Lyon Part Dieu Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/LyonPartDieu.jpg" data-lightbox="image" data-title="Lyon Part Dieu Station" class="popup_link">Lyon Part Dieu Station</a>
    <p>
    リヨン・パールデュー駅について
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Destnation</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="goToParisCard">
    <p class="next_text">▲ Paris (420km)</span>
    </div>
    <div class="next_card" id="LyonToGenevaCard">
    <p class="next_text">▶ Geneva (150km)</span>
    </div>
    <div class="next_card" id="LyonToMarseilleCard">
    <p class="next_text">▼ Marseille (320km)</span>
    </div>
    </div>
  </div>
`;
var markerPartDieu = L.marker([45.7603030076784, 4.860375801911088], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//  Marseille
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/station/Marseille.JPG" 
       data-lightbox="image" 
       data-title="Marseille">
      <img class="popup_img" loading="eager" src="image/map/station/Marseille.JPG" alt="Marseille Station">
    </a>
    <div class="popup_caption">
    <a href="image/map/station/Marseille.JPG" data-lightbox="image" data-title="Marseille Station" class="popup_link">Marseille Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="MarseilleToParisCard">
    <p class="next_text">▲ Paris（720km）</span>
    </div>
    <div class="next_card" id="MarseilleToLyonCard">
    <p class="next_text">▲ Lyon（320km）</span>
    </div>
    <div class="next_card" id="MarseilleToBarcelonaCard">
    <p class="next_text">◀ Barcelona（500km）</span>
    </div>
    </div>
  </div>
`;
var markerMarseille = L.marker([43.303077109875375, 5.3805544238165535], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);